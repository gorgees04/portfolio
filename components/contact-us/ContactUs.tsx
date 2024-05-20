import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div
      className="flex flex-col justify-center items-center px-3 md:px-10 mb-36 w-full"
      id="contact-me"
    >
      <h1 className="text-4xl font-extrabold mb-16">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
