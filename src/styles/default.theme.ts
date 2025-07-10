import { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const theme = {
    colors: {
        background: 'linear-gradient(135deg, #ebf8ff 0%, #e0e7ff 100%)',
        white: '#ffffff',
        black: '#1a202c',
        textHighEmphasis: '#374151',
        textMediumEmphasis: '#475569',
        textLowEmphasis: '#9ca3af',
        lightBlue: '#3b82f6',
        blueGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        darkBlueGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        greenGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        darkGreenGradient: 'linear-gradient(135deg, #047857 0%, #065f46 100%)',
        red: '#ef4444',
        darkRed: '#dc2626',
        lightGray: '#f3f4f6',
        gray: '#d1d5db'
    },
    bowShadow: {
        primary: 'box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    animations: {
        spin
    }
};
export default theme;
