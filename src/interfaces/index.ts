export interface ServiceLine {
    id: string;
    name: string;
    description: string;
}

export interface CompanyProfile {
    company_name: string;
    company_description: string;
    service_line: ServiceLine[];
    tier1_keywords: string[];
    tier2_keywords: string[];
    emails: string[];
    poc: string;
    website: string;
}
