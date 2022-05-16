import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ECB365] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0e04a135-a9f3-4179-a6c2-6edd0d23ae69"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#3A3845] border-[#383838]">
            Contact
          </p>
          <p className="text-[#3A3845] py-4">
            // Submit the form below or shoot me an email - miras.jaco@gmail.com
          </p>
        </div>
        <input
          className=" rounded-md p-2"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="my-4 p-2 rounded-md "
          type="text"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className=" rounded-md p-2"
          name="message"
          placeholder="Message"
          rows="10"
          required
        ></textarea>
        <button className="text-[#FCFFE7] text-lg text bg-[#36AE7C]  px-7 py-2 my-8 mx-auto flex items-center rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
