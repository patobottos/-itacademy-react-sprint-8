import "./index.css";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./app/Router";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
};

export default App;
