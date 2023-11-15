import { createGlobalStyle } from "styled-components";
import '../Styles/fonts.css'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }

    html {
        font-size: 62.5%; //A cada 1rem é 10px
    }

    html, body {
        height: 100%;
        background-color: #ffffff;
    }

    body {
        font-size: 1.8rem; //16px
        font-family: 'Roboto', sans-serif;
    }

    @media(max-width: 964px) {
        html {
            font-size: 50%;
        }
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 3rem;
        line-height: 3.1rem;
    }

    h3 {
        font-size: 2rem;
    }

    p {
        line-height: 2.3rem;
    }
`