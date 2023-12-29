"use client";

import { useRouter } from "next/navigation";

const ContactForm = () => {
  const route = useRouter();

  const handleSubmit = () => {
    route.refresh();
  };

  return (
    <div>
      <form
        action="https://formsubmit.co/gorgees041@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-[400px] md:w-[500px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
        />
        <button className="bg-gBlue bg-opacity-70 text-white p-2 rounded-md w-[80%] m-auto hover:bg-slate-800">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
