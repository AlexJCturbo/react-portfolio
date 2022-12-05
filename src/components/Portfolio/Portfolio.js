import React, { useState, useEffect } from "react";
import './Portfolio.css';
import EmployeeTracker01 from '..//../assets/images/employee_tracker/employee_tracker_01.png';
import JoinUs from '..//..//assets/images/join_us/join-us_01_home.png';
import TextEditor from '../../assets/images/PWA_text_editor/text_editor_03_app.png';
import WeatherForecast from '../../assets/images/weather_forecast/weather_dashboard_01_main.png';
import TeamProfile from '../../assets/images/team_profile/team_profile_generator.jpg';


function Portfolio() {

  //Array of Projects
  const [projects] = useState([
    { name: "employee_tracker", description: "A command-line Content Management System (CMS) application to manage a company's employee database.", photo: EmployeeTracker01 },
    { name: "join_us", description: "A website that offers the user the choice to meet friends, network for professional networking, grow businesses, host/attend events and explore interests.", photo: JoinUs },
    { name: "text_editor", description: "A single-page Text Editor application that runs in the browser and meets the PWA criteria.", photo: TextEditor },
    { name: "weather_forecast", description: "A weather forecast application that runs in the browser and features dynamically updated weather forecasts from the selected city.", photo: WeatherForecast },
    { name: "team_profile", description: "A Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each team member.", photo: TeamProfile },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div className="row m-5">

      <div className="col-lg-4">
        <div className="content mt-4 mb-4 ms-4">
          <h1 id="portfolio-header-1">Portfolio</h1>
        </div>

        <div className="pt-2">
          <ul className="projects flex-row margin-horizontal">
            {projects.map((project) => (
              <li
                className={`pt-2 pb-2 ${currentProject.name === project.name && 'project-active'}`}
                key={project.name}>
                <span onClick={() => {
                  setCurrentProject(project)
                }} >
                  {project.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="pt-2">
          <div className="display-project">
            <h3 className="pt-2 pb-2">{currentProject.name}</h3>
            <p>{currentProject.description}</p>

            <div id="project-photo" className="project-photo">
              <div id="project-image" className="row">
                <img id="photos" src={currentProject.photo} className="img-responsive " alt="web developer's profile photo" />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
};

export default Portfolio;