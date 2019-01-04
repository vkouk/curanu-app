import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="nav__content">
      <div className="nav__menu">
        <ul>
          <li>
            <Link to="#">Artikelen</Link>
          </li>
          <li>
            <Link to="#">Nieuws</Link>
          </li>
          <li>
            <Link to="#">Evenementen</Link>
          </li>
          <li>
            <Link to="#">Kwaliteitshandboek</Link>
          </li>
        </ul>
      </div>
      <div className="nav__search">
        <input className="nav__search__input" type="text" />
        <div className="nav__search__icon" />
      </div>
    </div>
  );
};
