import { createGlobalStyle } from 'styled-components';

export const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
  }

  html, body, :root {
    font-family: 'Poppins', Arial, Helvetica, sans-serif
  }
`;
