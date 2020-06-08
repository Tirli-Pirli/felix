import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [login, setLogout] = useState(false)

  const onClick = () => {
    setBurger((prevState) => !prevState);
  };

  const onLogin = () => {
    setLogout((prevState) => !prevState)
  }
  const singnedIn = "Sign In";
  const signedOut = "Sign Out";

 
  return (
    <nav className="navbar has-background-black">
      <div className="navbar-brand">
        <Link
        to="/home"
          className="navbar-item has-text-weight-bold has-text-primary"
         
        >
          <img src={logo} alt="Felix logo" />
        </Link>
        <Link
          to="/login"
          role="button"
          className={`navbar-burger burger ${burger && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={onClick}
        >
        </Link>
      </div>

      <div
        className={`navbar-menu has-background-black ${burger && "is-active"}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Button children="Sign in" to='/login' onClick={onLogin}
              >{login ? signedOut : singnedIn}</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
