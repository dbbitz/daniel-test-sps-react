import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

export default GlobalStyles;
