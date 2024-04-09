import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navr">
        <img src={logo} alt="" />
        <ul className="navLinks">
          <li>LOCATION</li>
          <li>SHOPS</li>
          <li>GIFTS CARDS</li>
          <li>FOOD TRUCKS</li>
          <li>EMAIL CLUB</li>
        </ul>
        <button className="menuBtn1">MENU</button>
      </div>
      <div id="navl">
        <button className="menuBtn2">H</button>
        <div>
          <h2>+1 718-942-4450</h2>
          <button className="styleBtn" id="locationBtn">NEW YORK</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
