import styled from 'styled-components';

export const ProfileHeader = styled.div`
    h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.black};
        margin: 0;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
    margin-top: 16px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
