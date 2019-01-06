import React, { Component, Fragment } from "react";
import * as firebase from "firebase/app";
import "firebase/storage";

class Widget extends Component {
  state = {
    expandedSections: {},
    data: this.props.data
  };

  componentDidMount() {
    return this.state.data.map(rec => {
      if (rec.image) {
        this.getImage(rec.image);
      }
    });
  }

  onAccordionToggle = label => {
    const { expandedSections } = this.state;

    const isOpen = !!expandedSections[label];

    this.setState({
      expandedSections: {
        [label]: !isOpen
      }
    });
  };

  getImage = image => {
    const storage = firebase
      .app()
      .storage("gs://curancy-app.appspot.com")
      .ref();

    return storage
      .child(`${image}.png`)
      .getDownloadURL()
      .then(url => {
        this.setState({
          [image]: url
        });
      });
  };

  renderWidget = (type, rec) => {
    switch (type) {
      case "list":
        return (
          <>
            {rec.image && (
              <>
                <div className="accordion__body__img">
                  <img src={this.state[rec.image]} alt={rec.content} />
                </div>
                <div className="accordion__body__text">{rec.content}</div>
              </>
            )}
            {rec.date && (
              <>
                <div className="accordion__body__text">{rec.date}</div>
                <div className="accordion__body__text">{rec.content}</div>
              </>
            )}
          </>
        );

      default:
        return null;
    }
  };

  render() {
    const {
      state: { data, expandedSections },
      props: { headerTitle, headerIcon, body, type }
    } = this;

    return (
      <div className="accordion accordion--widget">
        <div className="accordion__header">
          <div
            className="accordion__header__icon"
            style={{
              background: `#e5f0fa url(${headerIcon}) no-repeat center center`
            }}
          />
          <div
            className="accordion__header__body"
            onClick={() => this.onAccordionToggle(headerTitle.toLowerCase())}
          >
            <div className="accordion__header__text">{headerTitle}</div>
            <div
              className={`accordion__header__icon ${
                !!expandedSections[headerTitle.toLowerCase()]
                  ? "accordion__header__icon--down"
                  : "accordion__header__icon--up"
              }`}
            />
          </div>
          <div className="accordion__header__icon accordion__header__icon--close" />
        </div>
        <div
          className={`accordion__content ${
            !!expandedSections[headerTitle.toLowerCase()] ? "is-expanded" : ""
          }`}
          label={headerTitle.toLowerCase()}
        >
          {data.length > 0
            ? data.map(rec => {
                return (
                  <div
                    key={rec.id}
                    className={`accordion__body accordion__body--${type}`}
                  >
                    {this.renderWidget(type, rec)}
                  </div>
                );
              })
            : body}
        </div>
      </div>
    );
  }
}

export default Widget;
