import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div id="about" className="mb-20 pt-5">
      <SectionTitle>About Me</SectionTitle>
      <div className="w-full md:w-12/12">
        <p className="text-md text-gray-600 dark:text-gray-300">
          A fresh graduate student majoring in information systems who is very
          enthusiastic about technology and business. I really like designing
          website appearances to make it more attractive and research on User
          Experience (UX), besides that I am also very interested in managing
          the physical and technical aspects of a database like a database
          administrator. I have developed various types of websites such as
          Single Page Application (SPA) and designed databases to store data in
          them.
        </p>
      </div>
    </div>
  );
};

export default About;
