import React, { useState } from 'react';

import CustomInput from '../../components/Common/CustomInput';
import CustomButton from '../../components/Common/CustomButton';
import CompanyCard from '../../components/CompanyCard';

import GPTService from '../../services/GPTService';

import { CompanyProfile } from '../../interfaces';

import * as S from './styles';
import * as SS from '../../components/Common/styles';

const ProfileGenerator: React.FC = () => {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [company, setCompany] = useState<CompanyProfile>(
        {} as CompanyProfile
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const gptService = new GPTService();

        try {
            const res = await gptService.generateProfile(url);
            if (res)
                setCompany({
                    ...res,
                    id: res.id || Math.random().toString(36).substring(2, 15),
                    website: url,
                    service_line: res.service_line.map((l) => ({
                        ...l,
                        id: l.id || Math.random().toString(36).substring(2, 15) // Ensure each service line has a unique ID
                    }))
                });
            else alert('Failed to generate profile. Please try again.');
        } catch (error) {
            alert(
                'An error occurred while generating the profile. Please try again.'
            );
            console.error('Error generating profile:', error);
        }
        setIsLoading(false);
    };

    return (
        <S.Container>
            <S.MainWrapper>
                <S.Header>
                    <S.HeaderTitle>
                        <h1>Company Profile Generator</h1>
                    </S.HeaderTitle>
                    <S.HeaderSubtitle>
                        Enter a company website URL to generate a comprehensive
                        business profile with AI-powered insights
                    </S.HeaderSubtitle>
                </S.Header>

                <SS.Card>
                    <SS.Form onSubmit={handleSubmit}>
                        <SS.FormGroup>
                            <SS.Label htmlFor="url">
                                Company Website URL
                            </SS.Label>
                            <CustomInput
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://example.com"
                                required
                            />
                        </SS.FormGroup>

                        <CustomButton
                            type="submit"
                            variant="primary"
                            isLoading={isLoading}
                            loadingText="Generating Profile..."
                            icon="check"
                        >
                            Generate Profile
                        </CustomButton>
                    </SS.Form>
                </SS.Card>

                {company?.id && (
                    <CompanyCard company={company} setCompany={setCompany} />
                )}
            </S.MainWrapper>
        </S.Container>
    );
};

export default ProfileGenerator;
