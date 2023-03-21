import "./index.css";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StarshipList from "./components/Starships/StarshipList";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <StarshipList />
      </main>
      <footer>
        <>Aquí footer</>
      </footer>
    </div>
  );
};

export default App;
