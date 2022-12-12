import { NavLink } from "react-router-dom";

import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      {/* O NavLink era feito anteriormente da seguinte forma */}
      {/* <NavLink
        to="/teste"
        className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        teste
      </NavLink> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;
