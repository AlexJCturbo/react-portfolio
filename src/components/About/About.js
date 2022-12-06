import React from "react";
import './About.css'
import profilePicture from '../../assets/images/profile_picture.jpg'

function About() {
  return (
    <div>
      <div className="main-section row ms-5 mt-5 mb-5 me-0">

        <div className="col col-lg-6">
          <h2 id="header-about">Hi, I'm Alex Jaimes.</h2>
          <div className="content mt-4">
            <h1 id="full-stack-header">Full Stack <br></br>Web Developer.</h1>
            <p className="mt-5">
              Based in Toronto, currently in the UofT bootcamp.
              <br></br>
              <br></br>
              Hello, my name is Alex. I am a full-stack web developer with an engineering and management background and several years of problem solving experience. I worked as a Field Engineer in the oil and gas industry solving in-situ complex drilling problems, always working as part of a working team. I also have a background as a business manager after creating my petshop startup, developing strong leadership abilities. I am looking to bring my knowledge and technical skills to add value to an organization while focusing on continuous learning and engaging in my community.
              <br></br>
              <br></br>
              Please contact me at <a className="e-mail" href="mailto:jaimes.ac.5@gmail.com" >jaimes.ac.5@gmail.com</a> or at any of my social media.
            </p>
          </div>
        </div>

        <div id="photo-container" className="col col-lg-6">
          <img id="photo" src={profilePicture} className="img-responsive" alt="web developer Alex Jaimes" />
        </div>

      </div>

    </div>
  )
}

export default About;