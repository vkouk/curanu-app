import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    content: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const fieldValues = Object.entries(this.state);
    for (const [key, value] of fieldValues) {
      if (key !== "errors") {
        if (value.length < 1) {
          this.setState({
            [`${key}Error`]: `Field ${key} should not be empty.`
          });
        } else {
          delete this.state[`${key}Error`];
        }
      }
    }
  };

  render() {
    const { nameError, emailError, subjectError, contentError } = this.state;
    return (
      <div className="form">
        <div className="form__title">Contact pagina</div>
        <div className="form__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          convallis, magna nec efficitur tempor, dui eros fringilla tellus,
          vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit
          amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac
          blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor
          congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna
          non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi.
        </div>
        <div className="form__body">
          <form>
            <div className="form__control">
              <div className="form__label">Namm:</div>
              <input
                className="form__input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            {nameError && <div className="form__error">{nameError}</div>}
            <div className="form__control">
              <div className="form__label">Email:</div>
              <input
                className="form__input"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onInputChange}
              />
            </div>
            {emailError && <div className="form__error">{emailError}</div>}
            <div className="form__control">
              <div className="form__label">Onderwerp:</div>
              <input
                className="form__input"
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.onInputChange}
              />
            </div>
            {subjectError && <div className="form__error">{subjectError}</div>}
            <div className="form__control">
              <div className="form__label">Bericht:</div>
              <textarea
                className="form__textarea"
                name="content"
                value={this.state.content}
                onChange={this.onInputChange}
                rows="3"
              />
            </div>
            {contentError && <div className="form__error">{contentError}</div>}
            <div className="form__submit" onClick={this.onSubmit}>
              Verstuur
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
