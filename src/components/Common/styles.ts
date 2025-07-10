import styled from 'styled-components';

// Generic resuable components styles

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

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textHighEmphasis};
    margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 8px;
    font-size: 16px;
    resize: none;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.lightBlue};
        box-shadow: ${({ theme }) => theme.bowShadow.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textLowEmphasis};
    }
`;
