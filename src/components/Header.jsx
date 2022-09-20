import React from "react";

function Header({searchResult, result, click}) {
  return (
    <header>
      <nav>
        <figure className="logo__container z-3">
          <img src="./moon.svg" className="logo--img " />
        </figure>
        <div className="nav__list-container z-3">
          <ul className="nav__list z-3">
            <li className="nav__links">
              <a href="" className="nav__links--anchor">
                Home
              </a>
            </li>
            <li className="nav__links">
              <a href="" className="nav__links--anchor ">
                Find a movie
              </a>
            </li>
            <li className="nav__links ">
              <a href="" className="nav__links--anchor">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="search__container-header z-3">
        <h1 className="search--title">
          Browse our <span className="color--text">Movies</span>
        </h1>

<div>
        <input type="search" id="search-bar" value={result} onChange={searchResult}/>
        <button onClick={click}>@</button>
        </div>
      
      </div>
    </header>
  );
}

export default Header;
