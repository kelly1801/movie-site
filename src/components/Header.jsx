import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavBar from "./navBar";

function Header({searchResult, result, click})
 {
  return (
    <header>
      <NavBar />
    
      <div className="search__container-header z-3">
        <h1 className="search--title">
          Browse our <span className="color--text">Movies</span>
        </h1>

<div className="searchBar">
        <input type="search" value={result} onChange={searchResult}/>
        <button onClick={click}><SearchOutlinedIcon/></button>
        </div>
      
      </div>
    </header>
  );
}

export default Header;
