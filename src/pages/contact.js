import React from "react";
import Header from "../components/header/header"
import ContactForm from "../components/contact/contactForm";
import Social from "../components/social/social"


  export default ({ data }) => {
    return (
    <div>
      <Header></Header>
      <ContactForm></ContactForm>
      <Social></Social>
    </div>
    );
  }

