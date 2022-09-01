import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
