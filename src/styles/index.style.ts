import { createGlobalStyle } from 'styled-components';

// "Any" typing because of React v18 incompatibility with styled-components"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #1a202c;
  }

  input, textarea, button {
    font-family: inherit;
  }
`;
