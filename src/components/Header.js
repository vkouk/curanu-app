import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log(this.props.isAuthenticated);
    return "Beee";
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => {
  return { isAuthenticated };
};

export default connect(mapStateToProps)(Header);
