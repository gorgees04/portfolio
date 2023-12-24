import { FaGithubAlt } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ContactForm from "../ui/components/ContactForm";

const Contact = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-[100px]">
      <div className="text-4xl font-bold">Contact ME</div>

      <div className="flex flex-wrap justify-around items-center my-5 text-xl h-[200px]">
        <a
          href="https://github.com/gorgees04"
          target="_blank"
          className="m-5 text-4xl text-gLightBlue"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://www.linkedin.com/in/gorgees/"
          target="_blank"
          className="m-5 text-4xl text-gLightBlue"
        >
          <FiLinkedin />
        </a>
        <a
          href="mailto:gorgees041@gmail.com"
          target="_blank"
          className="m-5 text-4xl text-gLightBlue"
        >
          <MdOutlineAlternateEmail />
        </a>
        <a
          href="https://www.google.com/maps/place/Amman,+Jordan"
          target="_blank"
          className="m-5 text-4xl text-gLightBlue"
        >
          <FaMapLocationDot />
        </a>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
