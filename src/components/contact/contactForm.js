import React from "react";
import Helmet from "react-helmet";

import SVG from "../svg/SVG"
import contactStyles from "./contactForm.module.css"
import { Spin, Shatter, FadeIn } from "../../styles/animations"

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {success: false};
    this.back = this.back.bind(this);
  }
  back() {
    setTimeout(() => {
      this.setState({ success: false });
    }, 500);
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
      .then(setTimeout(() => {
        this.setState({ success: true });
      }, 500))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.title}>
          <Shatter>
            <SVG position="relative" icon="text"/>
          </Shatter>
        </div>
        <FadeIn className={(this.state.success) ? contactStyles.formContainer : contactStyles.hide}>
          <div className={contactStyles.successMsg}>Thank you for your message! I will get back to you within 2-5 business months.</div>
        <Spin className={(this.state.success) ? contactStyles.backButton : contactStyles.hide}>
          <button onClick={this.back}>
            <SVG position="relative" icon="circle" />
          </button>
        </Spin>
        </FadeIn>

        <FadeIn className={(!this.state.success) ? contactStyles.formContainer : contactStyles.hide}>
        <form 
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
            <input name="bot-field" />
        
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={this.handleChange}/>
            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.handleChange}/>
           
            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={this.handleChange}/>
          
            <Spin>
              <button type="submit">
                <SVG position="relative" icon="circle" />
              </button>
            </Spin>
        </form>
        </FadeIn>
      </div>
    );
  }
}
