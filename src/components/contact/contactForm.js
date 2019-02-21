import React from "react";
import Helmet from "react-helmet";

import contactStyles from "./contactForm.module.css"

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className={contactStyles.formContainer}>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Name<br />
            <input type="text" name="name" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Email<br />
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Message<br />
              <textarea name="message" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
