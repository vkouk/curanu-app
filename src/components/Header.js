import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header__top">
            <div className="header__top__menu">
              <ul>
                <li>
                  <Link to="/contact">Groepen Contact</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Smoelenboek</Link>
                </li>
                <li>
                  <Link to="#">Microblog</Link>
                </li>
                <li>
                  <Link to="#">Over ons</Link>
                </li>
              </ul>
            </div>
            <div className="header__top__services">
              <div className="service service--settings" />
              <div className="service service--notifications" />
            </div>
          </div>
          <div className="header__sub">
            <Link to="/">
              <div className="header__logo">
                <div className="header__logo__image" />
                <div className="header__logo__content">
                  <div className="header__logo__title">CuraNu</div>
                  <div className="header__logo__subtitle">Zorg en welzijn</div>
                </div>
              </div>
            </Link>
            <div className="header__logo__text">Intranet</div>
          </div>
        </div>
        <div className="nav">
          <Nav />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => {
  return { isAuthenticated };
};

export default connect(mapStateToProps)(Header);
