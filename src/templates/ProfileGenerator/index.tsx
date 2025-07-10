import React, { useState } from 'react';

import * as S from './styles';
import CustomInput from '../../components/Common/CustomInput';
import CustomButton from '../../components/Common/CustomButton';
import CustomLabel from '../../components/Common/CustomLabel';

const ProfileGenerator: React.FC = () => {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

                <S.Card>
                    <S.Form onSubmit={handleSubmit}>
                        <S.FormGroup>
                            <CustomLabel htmlFor="url">
                                Company Website URL
                            </CustomLabel>
                            <CustomInput
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://example.com"
                                required
                            />
                        </S.FormGroup>

                        <CustomButton
                            type="submit"
                            variant="primary"
                            isLoading={isLoading}
                            loadingText="Generating Profile..."
                            icon="check"
                        >
                            Generate Profile
                        </CustomButton>
                    </S.Form>
                </S.Card>
            </S.MainWrapper>
        </S.Container>
    );
};

export default ProfileGenerator;
