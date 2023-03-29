import React from "react";
import { NavbarContainer } from "./Navbar.styled"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li><Link to="/">HOME</Link><div className='laser'></div></li>
        <li><Link to="/starships">STARSHIPS</Link><div className='laser'></div></li>
      </ul>
    </NavbarContainer>
  );
}

export default Navbar;