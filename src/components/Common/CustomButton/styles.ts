import { styled } from 'styled-components';

export const Button = styled.button<{
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 12px 24px;
    border: none;
    border-radius: 8px;

    font-weight: 500;
    font-size: 16px;

    cursor: pointer;
    transition: all 0.2s ease;

    ${(props) => {
        switch (props.variant) {
            case 'success':
                return `
          background: ${props.theme.colors.greenGradient};
          color: white;
          &:hover:not(:disabled) {
            background: ${props.theme.colors.darkGreenGradient};};
          }
        `;
            case 'danger':
                return `
          background: ${props.theme.colors.red};
          color: white;
          &:hover:not(:disabled) {
            background: ${props.theme.colors.red};
          }
        `;
            default:
                return `
          background: ${props.theme.colors.blueGradient};
          color: white;
          &:hover:not(:disabled) {
            background: ${props.theme.colors.darkBlueGradient};};
          }
        `;
        }
    }}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => theme.bowShadow.primary};
    }

    svg.spinning {
        animation: ${({ theme }) => theme.animations.spin} 1s linear infinite;
    }
`;

export const LoadingSpinner = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${({ theme }) => theme.animations.spin} 1s ease-in-out infinite;
`;
