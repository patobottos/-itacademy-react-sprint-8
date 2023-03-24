import React from "react";
import { NavbarContainer } from "./Navbar.styled"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainer>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/starships">STARSHIPS</Link></li>
      </ul>
    </NavbarContainer>
  );
}

export default Navbar;