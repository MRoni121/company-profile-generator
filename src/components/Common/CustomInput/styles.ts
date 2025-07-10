import { styled } from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;

    svg {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);

        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.colors.textLowEmphasis};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    padding-left: ${(props) => (props.type === 'url' ? '40px' : '16px')};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 8px;
    font-size: 16px;
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
