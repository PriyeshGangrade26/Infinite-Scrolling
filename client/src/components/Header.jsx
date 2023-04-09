import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";
import "boxicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = ({ Logout }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="center_header_container Center">
        <header className="Header">
          <div className="Center">
            <Link
              to="/"
              className="Center">
              <box-icon
                name="customize"
                type="solid"
                animation="flashing"
                color="#000000"
                className="box-Icon"
                size="md"></box-icon>
              <span className="logo-title white-space">Dashboard</span>
            </Link>
          </div>

          <ul className={`navbar Center ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/home"
                className={location.pathname === "/home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
          </ul>

          <div className="Center">
            <box-icon
              class={"box-Icon"}
              name="log-in"
              animation="fade-left"
              color="#000000"></box-icon>
            <button
              className="log white-space"
              onClick={() => Logout()}>
              Log Out
            </button>
            <button
              className="hamburger"
              onClick={()=> toggleMenu()}>
              {isMenuOpen ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  size="2xl"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="2xl"
                />
              )}
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export { Header };
