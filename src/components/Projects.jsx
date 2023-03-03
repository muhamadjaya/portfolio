import React from "react";
import projects from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div id="projects" className="py-12 mb-12 mt-5">
      <SectionTitle>Recent Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectsItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            tech={project.tech}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
