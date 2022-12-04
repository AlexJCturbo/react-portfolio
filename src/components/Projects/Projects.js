import React, { useEffect } from "react";
import './Projects.css'

function Projects() {

  //Array of Projects
  const projects = [
    { name: "employee_tracker", description: "" },
    { name: "join_us", description: "" },
    { name: "text_editor", description: "" },
    { name: "weather_forecast", description: "", },
    { name: "team_profile", description: "" },
  ];

  function projectSelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <div>
      <ul className="flex-row">
        {projects.map((project) => (
          <li
            className="margin-horizontal"
            key={project.name}>
            <span onClick={() => projectSelected(project.name)} >
              {project.name}
            </span>
          </li>
        ))}

      </ul>
    </div>
  )
};

export default Projects;