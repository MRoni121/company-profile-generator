import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    padding: 32px 16px;
`;

export const MainWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 48px;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    h1 {
        font-size: 40px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.black};
        margin: 0;
    }
`;

export const HeaderSubtitle = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textMediumEmphasis};
    max-width: 512px;
    margin: 0 auto;
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.bowShadow.primary};

    border-radius: 16px;
    padding: 32px;
    margin-bottom: 32px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;
