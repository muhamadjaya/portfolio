import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-200 dark:bg-slate-800 text-center rounded-t-lg">
      <p className="text-md md:text-lg mt-2 text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} |{" "}
        <a
          href="#hero"
          className="font-semibold text-indigo-500 hover:text-indigo-700"
        >
          Muhamad Jaya
        </a>
        , All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
