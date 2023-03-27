import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/img/home_background.jpg";

const GlobalStyles = createGlobalStyle`

  {/* @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Rubik:wght@300;400;500&display=swap'); */}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    background-image: url(${backgroundImage});
    font-family: "Cairo", "Rubik", sans-serif;
    margin: 0;
  }
`

export default GlobalStyles;

