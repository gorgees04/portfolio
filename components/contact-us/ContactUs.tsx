import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 mb-36">
      <h1 className="text-4xl font-extrabold mb-16">Contact Us</h1>
      <div className="grid grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
