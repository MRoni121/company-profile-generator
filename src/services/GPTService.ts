import OpenAI from 'openai';
import api from './api';

import { CompanyProfile } from '../interfaces';

export default class GPTService {
    private client: OpenAI;

    constructor() {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_KEY || '',
            dangerouslyAllowBrowser: true // This is necessary for the browser to work with OpenAI
        });
        this.client = openai;
    }

    // Really simple function that makes a GET request to the URL and parse the first 5000 characters of the HTML content
    // It runs on the backend because of CORS restrictions
    // It is necessary because OpenAI API does not support scraping websites directly, so I supply the HTML content to the API
    // It helps getting an accurate context for the less known companies
    private async scrapeWebsite(url: string): Promise<string> {
        try {
            const res = await api.post(
                `${process.env.REACT_APP_BACKEND_URL}/scrape`,
                { url }
            );

            return res.data;
        } catch (error) {
            console.error('Error scraping the website:', error);
        }

        return '';
    }

    // Ideally, this function should be called on the backend to not expose the OpenAI API key
    // But, for the sake of simplicity, I will call it on the frontend
    public async generateProfile(
        url: string
    ): Promise<CompanyProfile | undefined> {
        const siteInfo = await this.scrapeWebsite(url);

        const thread = await this.client.beta.threads.create({
            messages: [
                {
                    role: 'user',
                    content: `${url}

                    ${siteInfo}
                    `
                }
            ]
        });

        const run = await this.client.beta.threads.runs.createAndPoll(
            thread.id,
            {
                assistant_id: process.env.REACT_APP_OPENAI_ASSISTANT_ID || ''
            }
        );
        const messages = await this.client.beta.threads.messages.list(
            thread.id,
            {
                run_id: run.id
            }
        );

        const message = messages.data.pop();

        if (!message || message.content[0].type !== 'text') {
            console.error('No valid message found in the thread');
            return;
        }
        const { text } = message.content[0];
        const { annotations } = text;

        let index = 0;
        for (const annotation of annotations) {
            text.value = text.value.replace(annotation.text, `[${index}]`);
            index++;
        }

        return JSON.parse(text.value) as CompanyProfile;
    }
}
