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
    font-style: normal;
    word-break: break-word;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height:140%;
    background: ${({ theme }) => theme.elementColor.site.background};
    color: ${({ theme }) => theme.elementColor.site.text};
    transition: background 0.5s; 
}
`;
