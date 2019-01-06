import React from "react";

export default () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <div className="contact__header__text">Telefoonboek</div>
        <div className="contact__header__subtext">
          Vind collega's op naam, trefwoord, dunctie, etc.
        </div>
      </div>
      <div className="contact__body">
        <div className="contact__search nav__search">
          <input className="contact__input nav__search__input" type="text" />
          <div className="contact__icon nav__search__icon" />
        </div>
      </div>
    </div>
  );
};
