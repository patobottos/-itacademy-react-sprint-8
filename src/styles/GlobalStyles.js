import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/img/home_background.jpg";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    background-image: url(${backgroundImage});
    font-family: "Cairo", "Rubik", sans-serif;
    margin: 0 auto;
  }

  a {
    color: #bfbfbf;
  }

  a:link {
  text-decoration: none;
  }

  a:visited {
  text-decoration: none;
  }

`;

export default GlobalStyles;
