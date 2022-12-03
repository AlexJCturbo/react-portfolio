import React, { useEffect } from "react";
import './Projects.css'

const projects = [
  { name: "employee_tracker", description: "", },
  { name: "join_us", description: "" },
  { name: "pwa_text_editor", description: "" },
  { name: "weather_forecast", description: "", },
  { name: "team_profile", description: "" },
];


function Projects() {
  return (
    <div>

      <ul className="flex-row">


        {projects.map((project) => (
          <li
            className="margin-horizontal"
            key={project.name}
          >
            <span onClick={projectSelected} >
              {project.name}
            </span>
          </li>
        ))}


      </ul>

    </div>
  )
};

export default Projects;