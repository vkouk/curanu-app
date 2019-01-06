import React, { Component } from "react";
import Accordion from "./Common/Accordion/Accordion";
import Widget from "./Common/Widget/Widget";
import AddWidget from "./Common/Widget/AddWidget";
import Contact from "./Contact";
import data from "../data.json";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="content__row">
          <div className="content__col">
            <Accordion />
          </div>
          <div className="content__col">
            <Widget
              data={data.directnar}
              headerTitle={"Direct Naar"}
              type={"list"}
              headerIcon={require("../assets/external-link.svg")}
              showFooter={false}
            />
          </div>
          <div className="content__col">
            <Contact />
          </div>
          <div className="content__col">
            <Widget
              data={data.events}
              headerTitle={"Evenementen"}
              type={"list"}
              headerIcon={require("../assets/calendar.png")}
              showFooter={true}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.blogs}
              headerTitle={"Blogs"}
              type={"blog"}
              headerIcon={require("../assets/Shape.png")}
              showFooter={true}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.microblogs}
              headerTitle={"microblog"}
              type={"microblog"}
              headerIcon={require("../assets/Shape.png")}
              showFooter={true}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.news}
              headerTitle={"Nieuws"}
              type={"news"}
              headerIcon={require("../assets/newspaper.png")}
              showFooter={true}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.statistics}
              headerTitle={"Kwaliteitshandboek"}
              type={"list"}
              headerIcon={require("../assets/kwaliteitshandboek.png")}
              showFooter={true}
            />
          </div>
          <div className="content__col">
            <AddWidget />
          </div>
          <div className="content__col">
            <Widget
              body={"Er zijn geen peilingen beschikbaar."}
              headerTitle={"Peilingen"}
              headerIcon={require("../assets/kwaliteitshandboek.png")}
              showFooter={false}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.links}
              headerTitle={"Mijn links"}
              type={"list"}
              headerIcon={require("../assets/external-link.png")}
              showFooter={false}
            />
          </div>
          <div className="content__col">
            <Widget
              data={data.groepen}
              headerTitle={"Mijn groepen"}
              type={"list"}
              headerIcon={require("../assets/groups.png")}
              showFooter={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
