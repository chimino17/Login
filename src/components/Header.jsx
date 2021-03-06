import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav>
        {/* <img src="rick-and-morty-rick.gif" alt="logo" class="logo "></img>{" "} */}
        <h1>
          <Link className="a" to="/Login">
            Login
          </Link>
          <Link className="a" to="/Mapa">
            {" "}
            Mapa
          </Link>{" "}
          <Link className="a" to="/NotFount">
            NotFount
          </Link>
        </h1>

        <h1>
          <span className="a contact">
            <a
              className="link"
              target="_blank"
              href="https://github.com/chimino17"
              rel="noreferrer"
            >
              Manuel Alejandro
            </a>
          </span>
        </h1>
      </nav>
    </>
  );
};

export default Header;
