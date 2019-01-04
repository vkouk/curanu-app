import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};
