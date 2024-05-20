"use client";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";

const contactVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.5 },
  },
};

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-150px", once: true }}
      className="flex flex-col justify-center items-center px-3 md:px-10 mb-36 w-full"
      id="contact-me"
    >
      <h1 className="text-4xl font-extrabold mb-16">Contact Me</h1>
      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-150px", once: true }}
        className="grid grid-cols-1 md:grid-cols-2 w-full"
      >
        <motion.div variants={contactVariants} className="mx-auto mb-10">
          <ContactInfo />
        </motion.div>
        <motion.div variants={contactVariants} className="w-full">
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
