import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Starships from "../pages/Starships/Starships";
import Starship from "../pages/Starship/Starship";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AppContainer from "../components/MainContainer/MainContainer.styled";

const Router = () => (
  <BrowserRouter>
    <AppContainer>
      <Header />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/starships/" element={<Starships />} />
        <Route path="/starships/:id" element={<Starship />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </AppContainer>
  </BrowserRouter>
);

export default Router;
