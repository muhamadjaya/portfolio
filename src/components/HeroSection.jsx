import React from "react";
import ProfileImg from "../assets/imgprofile.png";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex items-center justify-between flex-row py-20 mb-4"
    >
      <div>
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Muhamad Jaya
        </h1>
        <p className="text-md md:text-lg max-w-lg mb-3 text-gray-600 dark:text-gray-300">
          —— Front-End Engineer <br />
          <span className="text-sm">
            I'm a React JS Front-End Engineer. I really love to design the
            appearance of the website to make it more attractive and good user
            experience.
          </span>
          <br />
        </p>
        <p className="text-xl md:text-3xl max-w-lg my-3 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/muhamadjaya" target="_blank">
            <i className="bi bi-github fs-4 pe-3 bi-icon mr-4"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhamadjaya/" target="_blank">
            <i className="bi bi-linkedin fs-4 pe-3 bi-icon mr-4"></i>
          </a>
          <a href="https://www.instagram.com/muhamadjayaa/" target="_blank">
            <i className="bi bi-instagram fs-4 pe-3 bi-icon mr-4"></i>
          </a>
          <a href="mailto:jayamuhamad99@gmail.com">
            <i className="bi bi-envelope fs-4 pe-3 bi-icon"></i>
          </a>
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-2 mt-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get to Know Me
        </a>
      </div>
      <div className="max-w-[13rem] ml-32">
        <img src={ProfileImg} alt="profile" />
      </div>
    </div>
  );
};

export default HeroSection;
