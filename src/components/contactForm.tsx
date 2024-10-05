import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  textColour: string;
}

export const ContactForm = ({ textColour }: ContactFormProps): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);

  const sendEmail = (event: any) => {
    if (!form.current) {
      return;
    }
    event.preventDefault();
    // call emailjs API

    emailjs
      .sendForm("contact-form", "contact_form", form.current, {
        publicKey: "f_yF93cRA3dpnB3wL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-row justify-center py-5 md:py-0 md:pt-10 md:pb-5">
      <form
        className="flex flex-col w-9/10 min-w-md"
        onSubmit={sendEmail}
        ref={form}
      >
        <label
          htmlFor="name"
          className={`${textColour} pb-2 text-md md:text-lg`}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="p-2 text-md md:text-lg rounded-md py-1.5 shadow-sm border ring-gray-300 placeholder:text-gray-400"
          placeholder="Your Name"
        />
        <label
          htmlFor="email"
          className={`${textColour} pt-1 md:pt-4 pb-2 text-md md:text-lg`}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 text-md md:text-lg rounded-md py-1.5 shadow-sm border ring-gray-300 placeholder:text-gray-400"
          placeholder="Your Email"
        />
        <label
          htmlFor="message"
          className={`${textColour} pt-1 md:pt-4 pb-2 text-md md:text-lg`}
        >
          Message
        </label>
        <textarea
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="p-2 text-sm md:text-lg rounded-md py-1.5 shadow-sm border ring-gray-300 placeholder:text-gray-400"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className={`p-2 mt-4 bg-white hover:bg-gray-100 text-md md:text-lg rounded ${textColour}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
