import React from "react";
import Header from "../components/header/header"
import ContactForm from "../components/contact/contactForm";

import { FacebookProvider, Page } from 'react-facebook';


  export default ({ data }) => {
    return (
    <div>
      <Header></Header>
      <ContactForm></ContactForm>
      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>    
    </div>
    );
  }

