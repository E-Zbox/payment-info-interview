import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: "Calibri";
        transition: padding 450ms cubic-bezier(0.6, -0.28, -0.735, 0.045), width 200ms ease-out;
        &::before {
            padding: 0px;
            margin: 0px;
            transition: all 445ms ease-in-out;
        }  
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px:10px;
    }
    .top-border {
        border-top: 2px solid #ddd;
    }
    body {
        div#root {
            box-sizing: border-box;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
    }
    
`;

export default GlobalStyle;
