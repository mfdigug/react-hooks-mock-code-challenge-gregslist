import React from "react";
import Search from "./Search";

function Header({ setSearchBy }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchBy={setSearchBy}/>
    </header>
  );
}

export default Header;
