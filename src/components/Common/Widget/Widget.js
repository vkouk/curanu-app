import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/storage";

class Widget extends Component {
  state = {
    expandedSections: {},
    data: this.props.data
  };

  componentDidMount() {
    return (
      this.state.data &&
      this.state.data.map(rec => {
        if (rec.avatar && rec.image) {
          this.getImage(rec.image);
          this.getImage(rec.avatar);
        } else {
          this.getImage(rec.image);
        }
      })
    );
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
            {rec.link && (
              <>
                <div className="accordion__body__link">
                  <a href={rec.link} target="_blank" rel="noopener noreferrer">
                    {rec.link}
                  </a>
                </div>
              </>
            )}
          </>
        );
      case "news":
        return (
          <>
            <div className="accordion__body__img">
              <img src={this.state[rec.image]} alt={rec.content} />
            </div>
            <div className="accordion__body__details">
              <div className="accordion__body__text">{rec.date}</div>
              <div className="accordion__body__text">{rec.content}</div>
            </div>
            <div className="accordion__body__img accordion__body__like" />
          </>
        );
      case "blog":
        return (
          <>
            <div className="accordion__body__header">
              <img src={this.state[rec.image]} alt={rec.content} />
              <div className="accordion__body__info">
                <div className="accordion__body__text">{rec.author}</div>
                <div className="accordion__body__text">{rec.date}</div>
              </div>
              <div className="accordion__header__icon accordion__header__icon--like" />
            </div>
            <div className="accordion__body__content">{rec.content}</div>
          </>
        );
      case "microblog":
        return (
          <>
            <div className="accordion__area">
              <div className="accordion__area__input">
                <textarea rows="3" />
              </div>
              <div className="accordion__area__footer">
                <div className="accordion__area__links" />
                <div className="accordion__area__btn">Plaats</div>
              </div>
            </div>
            <div className="accordion__area__content">
              <div className="accordion__body__header">
                <img src={this.state[rec.avatar]} alt={rec.content} />
                <div className="accordion__body__info">
                  <div className="accordion__body__text">{rec.author}</div>
                  <div className="accordion__body__text">{rec.date}</div>
                </div>
                <div className="accordion__header__icon accordion__header__icon--like" />
              </div>
              <div className="accordion__area__text">{rec.content}</div>
              <div className="accordion__area__img">
                <img src={this.state[rec.image]} alt={rec.content} />
              </div>
              <div className="accordion__area__text">
                Lees meer en reacties (0)
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  render() {
    const {
      state: { data, expandedSections },
      props: { headerTitle, headerIcon, body, type, showFooter }
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
          {data && data.length > 0 ? (
            data.map(rec => {
              return (
                <div
                  key={rec.id}
                  className={`accordion__body accordion__body--${type}`}
                >
                  {this.renderWidget(type, rec)}
                </div>
              );
            })
          ) : (
            <div className="accordion__body">{body}</div>
          )}
        </div>
        <div
          className={`accordion__footer ${
            showFooter && !!expandedSections[headerTitle.toLowerCase()]
              ? "show"
              : "hide"
          }`}
        >
          <div className="accordion__footer__body">
            <div className="accordion__footer__text">
              {type === "microblog"
                ? "Toon meer"
                : `Meer ${headerTitle.toLowerCase()}`}
            </div>
            <div className="accordion__footer__icon accordion__header__icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
