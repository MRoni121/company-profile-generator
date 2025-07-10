import { styled } from 'styled-components';

export const Container = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.grayHover};
    border-radius: 8px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.lightGray};
`;

export const ServiceLineDescription = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMediumEmphasis};
    margin: 0;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.textHighEmphasis};
    }
`;

export const ServiceLineHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    gap: 16px;

    > div {
        flex: 1;
    }

    h4 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        margin: 0;
        cursor: pointer;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;
