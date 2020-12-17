import React, { Component } from 'react';

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

export default class EmailListForm extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { email: "", firstname: ""};
  // }
  //
  //
  // // Code for the contact form submission given by Netlify documentation
  // handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "emaillist", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));
  //
  //   e.preventDefault();
  // };
  //
  // handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="email-list-form">
        <div className="contactcontainer">
          <div className="emailformcaption">Subscribe to my newsletter for a free 4-step Meditation Guide!</div>
          <a href="https://f01b0c2b.sibforms.com/serve/MUIEAJ6sL4tVXfn72iaXm-kwyoX8x-aFlrNqg8KLr46JpLePOxHNxqnvkgDH9rkvB1Bv8NMELRnt9PeIKFE6IaJLbBHBCQLMgG4AGaaDBToh2j_iJsii1goNS-QZPjT7C0Oy0mhYRNCnJteTOVhKcYPJoxSCTi-5W9NS5RXto-eGjcB0ShculqReXH6W_OPwRFsOqo1XTHRkYNLd">Click here to sign up!</a>
        </div>
      </div>
    );
  };


}
