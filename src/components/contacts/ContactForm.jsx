import React from "react";

function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
      <p className="text-gray-600 mb-6">
        For more information about our products, please feel free to drop us an
        Email. Our team always put there to help you Out to get better
        Furniture!
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Abc@gmail.com"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="This is an heading"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hi i'd like to ask about"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
