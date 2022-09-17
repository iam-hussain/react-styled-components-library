import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 16px;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
