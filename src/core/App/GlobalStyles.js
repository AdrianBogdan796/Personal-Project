import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    margin: auto;
    word-break: break-word;
    padding: 10px;
    background: ${({ theme }) => theme.elementColor.site.background};
    color: ${({ theme }) => theme.elementColor.site.text};
    transition: background 0.5s; 
}
`;
