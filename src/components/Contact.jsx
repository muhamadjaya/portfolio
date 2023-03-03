import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div id="contact" className="mb-20 pt-5">
      <SectionTitle>Contact</SectionTitle>
      <div className="bg-slate-200 dark:bg-slate-800 px-10 py-10 rounded-lg">
        <form
          action="https://getform.io/f/03349c17-74fe-402c-87ba-a81cba4f21ec"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="text-lg md:text-xl py-2 font-semibold text-gray-600 dark:text-gray-300">
                Name
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-slate-400 dark:border-none"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg md:text-xl py-2 font-semibold text-gray-600 dark:text-gray-300">
                Email
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-slate-400 dark:border-none"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-lg md:text-xl py-2 font-semibold text-gray-600 dark:text-gray-300">
              Subject
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-slate-400 dark:border-none"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-lg md:text-xl py-2 font-semibold text-gray-600 dark:text-gray-300">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-slate-400 dark:border-none"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium mt-4 w-full p-4 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
