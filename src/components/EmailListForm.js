import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class EmailListForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "", firstname: ""};
  }


  // Code for the contact form submission given by Netlify documentation
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "emaillist", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstname, email } = this.state;
    return (
      <div className="email-list-form">
        <div className="contactcontainer">
          <div className="emailformcaption">Subscribe to my newsletter for a free 4-step meditation guide!</div>
          <form name="emaillist" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="emaillist" />
            <div className="input-row-1">
                <label>
                  First Name: <br></br> <input type="firstname" name="firstname" value={firstname} onChange={this.handleChange} />
                </label>
            </div>
            <div className="input-row-1">
                <label>
                  Email: <br></br> <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
            </div>

              <button id="submit" type="submit">Send</button>

          </form>
        </div>
      </div>
    );
  };


}
