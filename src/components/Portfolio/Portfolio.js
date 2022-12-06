import React, { useState } from "react";
import './Portfolio.css';
import EmployeeTracker01 from '..//../assets/images/employee_tracker/employee_tracker_01.png';
import JoinUs from '..//..//assets/images/join_us/join-us_01_home.png';
import TextEditor from '../../assets/images/PWA_text_editor/text_editor_03_app.png';
import WeatherForecast from '../../assets/images/weather_forecast/weather_dashboard_01_main.png';
import TeamProfile from '../../assets/images/team_profile/team_profile_generator.jpg';
import ContactCard from '../../assets/images/contact_cards/contact_cards_01_main.png';

function Portfolio() {

  //Array of Projects
  const [projects] = useState([
    { name: "join_us", description: "A website that offers the user the choice to meet friends, network for professional networking, grow businesses, host/attend events and explore interests.", photo: JoinUs, link: 'https://join-us2.herokuapp.com/dashboard', githubRepo: 'https://github.com/AlexJCturbo/Join-Us' },
    { name: "text_editor", description: "A single-page Text Editor application that runs in the browser and meets the PWA criteria.", photo: TextEditor, link: 'https://github.com/AlexJCturbo/text_editor', githubRepo: 'https://github.com/AlexJCturbo/text_editor' },
    { name: "weather_forecast", description: "A weather forecast application that runs in the browser and features dynamically updated weather forecasts from the selected city.", photo: WeatherForecast, link: 'https://alexjcturbo.github.io/weather-dashboard/', githubRepo: 'https://github.com/AlexJCturbo/weather-dashboard' },
    { name: "team_profile", description: "A Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each team member.", photo: TeamProfile, link: 'https://github.com/AlexJCturbo/team_profile_generator', githubRepo: 'https://github.com/AlexJCturbo/team_profile_generator' },
    { name: "employee_tracker", description: "A command-line Content Management System (CMS) application to manage a company's employee database.", photo: EmployeeTracker01, link: 'https://github.com/AlexJCturbo/employee-tracker', githubRepo: 'https://github.com/AlexJCturbo/employee-tracker' },
    { name: "contact_cards", description: "A Progressive Web Application (PWA) that generates contact cards. This app allows users to store contact information and profile pics and add, edit, and delete the information in a convenient single-page application.", photo: ContactCard, link: 'https://github.com/AlexJCturbo/contact-card', githubRepo: 'https://github.com/AlexJCturbo/contact-card' },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div className="row m-4">

      <div className="col-lg-4 mt- pt-3">
        <div className="content mt-1 ms-4 mb-4 ps-1">
          <h1 id="portfolio-header-1">Portfolio</h1>
        </div>

        <div className="pt-2">
          <ul className="flex-row">
            {projects.map((project) => (
              <li
                className={`projects-list pt-2 pb-2 ${currentProject.name === project.name && 'project-active'}`}
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

      <div className="col-lg-8 mt-1">
        <div className="pt-2">
          <div className="display-project">
            <h3 className="pt-2 pb-2">{currentProject.name}</h3>
            <p>{currentProject.description}</p>
            <p>GitHub Repository: <a className="github-repo" href={currentProject.githubRepo} target="_blank" rel="noreferrer">{currentProject.githubRepo}</a></p>
            <br></br>
            <div id="project-image">
              <a href={currentProject.link} className="row" target="_blank" rel="noreferrer">
                <img id="photos" src={currentProject.photo} className="img-responsive" alt="web developer Alex Jaimes" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
};

export default Portfolio;