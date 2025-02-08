import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.font};
        line-height: 1.2;
    }
   
    
    a{
        text-decoration: none;
        cursor: pointer;
        color: ${Theme.colors.font};
    }
    ul{
        list-style: none;
    }
    button{
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.font};
    }

    section{
        padding: 100px 150px;
    }    
    section:nth-of-type(odd) {
        background-color: ${Theme.colors.primaryBG};
    }

section:nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBG};
    }

h3{
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.08em;
}
p{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
}
`