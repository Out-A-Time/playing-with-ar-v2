import React from "react";

const Header = () => {
  return (
    <div>
      <span className="logo">Fancy fARnitures</span>
      <span className="navbar">
        <span className="category">
          <button className="btn-navbar">Chairs</button>
          <button className="btn-navbar">Desks</button>
          <button className="btn-navbar">Sofas</button>
          <button className="btn-navbar">Decorations</button>
          <button className="btn-navbar">Contact</button>
        </span>
        <span className="login">
          <button className="btn-navbar button-login">Log In</button>
          <button className="btn-navbar button-signup">Sign Up</button>
        </span>
      </span>
      <br></br>
      <span className="searchbar">Search Bar</span>
    </div>
  );
};

export default Header;
