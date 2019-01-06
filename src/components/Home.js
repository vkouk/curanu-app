import React, { Component } from "react";
import Accordion from "./Common/Accordion/Accordion";
import Widget from "./Common/Widget/Widget";
import Contact from "./Contact";
import data from "../data.json";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Accordion />
        <Widget
          data={data.directnar}
          headerTitle={"Direct Naar"}
          type={"list"}
          headerIcon={require("../assets/external-link.svg")}
        />
        <Contact />
        <Widget
          data={data.events}
          headerTitle={"Evenementen"}
          type={"list"}
          headerIcon={require("../assets/calendar.png")}
        />
        <Widget
          data={data.blogs}
          headerTitle={"Blogs"}
          type={"blog"}
          headerIcon={require("../assets/Shape.png")}
        />
        <Widget
          data={data.microblogs}
          headerTitle={"microblog"}
          type={"microblog"}
          headerIcon={require("../assets/Shape.png")}
        />
        <Widget
          data={data.news}
          headerTitle={"Nieuws"}
          type={"news"}
          headerIcon={require("../assets/newspaper.png")}
        />
        <Widget
          data={data.statistics}
          headerTitle={"Kwaliteitshandboek"}
          type={"list"}
          headerIcon={require("../assets/kwaliteitshandboek.png")}
        />
      </div>
    );
  }
}

export default Home;
