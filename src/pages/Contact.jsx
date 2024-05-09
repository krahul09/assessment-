import React from "react";
import ContactForm from "../components/contacts/ContactForm";
import ContactInfo from "../components/contacts/ContactInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
