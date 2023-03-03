import React from "react";
import skills from "../data/skills";
import SectionTitle from "./SectionTitle";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div>
      <div id="skills" className="py-12 mb-12 mt-5">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <SkillsItem
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
