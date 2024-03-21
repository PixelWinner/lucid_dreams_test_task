import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
     margin: 0;
    }

    #root {
        display: flex;
        width: 100%;
        height: 100vh;
        overflow: auto;
    }
`;
