import React from 'react';

import * as S from './styles';
import * as SS from '../Common/styles';
import { CompanyProfile } from '../../interfaces';
import EditableField from '../Common/EditableField';
import { EditableChips } from '../Common/EditableField/EditableChips';

interface ICompanyCard {
    company: CompanyProfile;
    setCompany: (company: CompanyProfile) => void;
}
const CompanyCard: React.FC<ICompanyCard> = ({ company, setCompany }) => {
    return (
        <SS.Card>
            <S.ProfileHeader>
                <h2>Company Profile</h2>
            </S.ProfileHeader>

            <S.Grid>
                <S.Section>
                    <S.SectionTitle>Basic Information</S.SectionTitle>
                    <S.SectionContent>
                        <SS.FormGroup>
                            <SS.Label>Company Name</SS.Label>
                            <EditableField
                                value={company.company_name}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        company_name: e.target.value
                                    })
                                }
                            />
                        </SS.FormGroup>
                        <SS.FormGroup>
                            <SS.Label>Description</SS.Label>
                            <EditableField
                                multiline
                                value={company.company_description}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        company_description: e.target.value
                                    })
                                }
                            />
                        </SS.FormGroup>
                        <SS.FormGroup>
                            <SS.Label>Tier 1 Keywords</SS.Label>
                            <EditableChips
                                value={company.tier1_keywords}
                                onUpdate={(keywords) =>
                                    setCompany({
                                        ...company,
                                        tier1_keywords: keywords
                                    })
                                }
                                placeholder="Enter tier 1 keywords separated by commas"
                                chipVariant="tier1"
                            />
                            <SS.FormGroup>
                                <SS.Label>Tier 2 Keywords</SS.Label>
                                <EditableChips
                                    value={company.tier2_keywords}
                                    onUpdate={(keywords) =>
                                        setCompany({
                                            ...company,
                                            tier2_keywords: keywords
                                        })
                                    }
                                    placeholder="Enter tier 2 keywords separated by commas"
                                    chipVariant="tier2"
                                />
                            </SS.FormGroup>
                            <SS.Label>Website</SS.Label>
                            <EditableField
                                value={company.website}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        website: e.target.value
                                    })
                                }
                            />
                        </SS.FormGroup>
                        <SS.FormGroup>
                            <SS.Label>Point of Contact</SS.Label>
                            <EditableField
                                value={company.poc}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        poc: e.target.value
                                    })
                                }
                            />
                        </SS.FormGroup>
                        <SS.FormGroup>
                            <SS.Label>Emails</SS.Label>
                            <EditableChips
                                value={company.emails}
                                onUpdate={(emails) =>
                                    setCompany({
                                        ...company,
                                        emails
                                    })
                                }
                                placeholder="Enter emails separated by commas"
                            />
                        </SS.FormGroup>
                    </S.SectionContent>
                </S.Section>
            </S.Grid>
        </SS.Card>
    );
};

export default CompanyCard;
