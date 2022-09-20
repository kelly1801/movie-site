import React from "react";
import {useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate()
  return (
    <nav>
      <figure className="logo__container z-3">
        <img src="./moon.svg" className="logo--img " />
      </figure>
      <div className="nav__list-container z-3">
        <ul className="nav__list z-3">
          <li className="nav__links" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="nav__links" onClick={() => navigate("/search")}>
            Find a movie
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
