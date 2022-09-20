import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  return (
    <footer>
      <figure className="footer__logo z-3">
        <img src="./moon.svg" className="logo--img " />
      </figure>

      <ul className="footer__list">
        <li className="footer__links" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="footer__links" onClick={() => navigate("/search")}>
          Find a movie
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
