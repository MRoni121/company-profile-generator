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
        textHighEmphasis: '#1e40af',
        textMediumEmphasis: '#475569'
    },
    bowShadow: {
        primary: 'box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    animations: {
        spin
    }
};
export default theme;
