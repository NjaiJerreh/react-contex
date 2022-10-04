import React from "react";
import { NavLink } from "react-router-dom";
import LogoDemo from "./assets/LogoDemo.jpg";

export const NavLinks = () => {
  return (
    <div className="navlinksContainer">
      <div className="logoContainer">
        <img src={LogoDemo} alt="logo" width="50px" backgroundcolor="blue" />
      </div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      {/* <NavLink to="/contact">CONTACT</NavLink> */}
      <NavLink to="/flex">FLEX </NavLink>
      <NavLink to="/likeme">LikeMe </NavLink>
      
    </div>
  );
};
