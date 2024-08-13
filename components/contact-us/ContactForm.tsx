"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-5 xl:px-16">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
          onChange={handleChange}
          value={form.name}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
          onChange={handleChange}
          value={form.email}
        />

        <input
          required
          type="text"
          name="subject"
          placeholder="subject"
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
          onChange={handleChange}
          value={form.subject}
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          rows={6}
          className=" bg-gBlue bg-opacity-20 border-2 border-gBlue rounded-md p-2 m-5"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          value={form.message}
        />
        <button className="bg-gBlue bg-opacity-70 text-white p-2 rounded-md w-[80%] m-auto hover:bg-slate-800">
          {loading ? "Sending..." : "SEND"}
        </button>

        {error && (
          <p className="text-red-500 text-center mt-5">
            Something went wrong. Please try again later.
          </p>
        )}

        {success && (
          <p className="text-green-500 text-center mt-5">
            Email sent successfully
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
