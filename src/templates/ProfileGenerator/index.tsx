import React, { useState } from 'react';

import CustomInput from '../../components/Common/CustomInput';
import CustomButton from '../../components/Common/CustomButton';

import { CompanyProfile } from '../../interfaces';

import * as SS from '../../components/Common/styles';
import * as S from './styles';

import mockCompany from '../../mock/mockCompany';
import CompanyCard from '../../components/CompanyCard';

const ProfileGenerator: React.FC = () => {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [company, setCompany] = useState<CompanyProfile>(mockCompany);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // TODO
        event.preventDefault();
        setIsLoading(!isLoading);
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

                {company?.company_name && (
                    <CompanyCard company={company} setCompany={setCompany} />
                )}
            </S.MainWrapper>
        </S.Container>
    );
};

export default ProfileGenerator;
