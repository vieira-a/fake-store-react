import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kumbh Sans', sans-serif;
  }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }
  ::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }
  ::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }
`;