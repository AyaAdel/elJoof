import React, { useState } from "react";

import "./style.css";

type Iprops = {
  handleSearch: Function;
};

function Header({ handleSearch }: Iprops) {
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);

  const generateSearch = () => {
    setDisplaySearch(!displaySearch);
    handleSearch(!displaySearch);
  };

  return (
    <header>
      <div className="nav-section-right">
        <div className="main-logo">
          <img src="./images/eljof-logo.png" alt="Eljof-Logo" />
        </div>
        <div className="navbar-search-btn">
          <button className="nav-bar-btn" onClick={generateSearch}>
            <img src="./images/search.svg" alt="Search Icon" />
            <span>بحث</span>
          </button>
        </div>
      </div>
      <div className="secondary-logo">
        <img src="./images/vision-logo.png" alt="Vision Logo" />
      </div>
    </header>
  );
}

export default Header;
