import { styled } from 'styled-components';

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textHighEmphasis};
    margin-bottom: 8px;
`;
