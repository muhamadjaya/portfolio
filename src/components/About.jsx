import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div id="about" className="mb-20 pt-5">
      <SectionTitle>About Me</SectionTitle>
      <div className="w-full md:w-12/12">
        <p className="text-md text-gray-600 dark:text-gray-300">
          My name is Muhamad Jaya, and I am a Front-End Engineer with a passion
          to push my limits. Over the past 1+ years, I've been learning the ins
          and outs of web programming with ReactJs and other JavaScript
          Frameworks. I really like to design websites to be compatible with
          browsers and make sure websites and applications are mobile friendly,
          besides that I am always gaining valuable experience and developing my
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;
