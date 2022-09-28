import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
`
