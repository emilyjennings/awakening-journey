import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class EmailListForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: ""};
  }


  // Code for the contact form submission given by Netlify documentation
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "email-list", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

// contact form as per code given by netlify's form docs
  render() {
    const { email } = this.state;
    return (
      <div className="email-list-form">
        <div className="contactcontainer">
          <div className="formcaption">Join my email list! Newsletters coming soon.</div>
          <form name="email-list" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-row-1">
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>

            </div>

              <button id="submit" type="submit">Send</button>

          </form>
        </div>
      </div>
    );
  };


}
