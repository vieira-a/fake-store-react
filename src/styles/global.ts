import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }
  
  li {
    list-style: none;
  }

  a,
  img,
  span,
  button,
  i {
  display: block;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  img {
  height: auto;
  }

  button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  }
  
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }
  ::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }
  ::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }
`;
