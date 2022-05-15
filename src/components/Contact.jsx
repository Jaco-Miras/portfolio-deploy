import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#EB5353] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/0e04a135-a9f3-4179-a6c2-6edd0d23ae69"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#383838] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - miras.jaco@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          placeholder="Message"
          rows="10"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#383838] hover:border-[#383838] px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
