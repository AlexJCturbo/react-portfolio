import React from "react";
import './About.css'
import profilePicture from '../../assets/images/profile_picture.jpg'
// import video from '../../assets/videos/background_video/futuristic_plexus1.mp4'

//Stock footage provided by A Luna Blue, downloaded from videvo.net
function About() {
  return (
    <div>
      <main className="container">

        <div className="main-section row ms-4 mt-4">
          <div className="col-md-6">
            <h2 id="header-about">Hi, I'm Alex Jaimes.</h2>
            <div className="content mt-4">
              <h1 id="full-stack-header">Full Stack <br></br>Web Developer.</h1>
              <p className="mt-5">Based in Toronto, currently in the UofT bootcamp.</p>
            </div>
          </div>

          <div id="photo-container" className="col-md-6">
            <div id="photo-div" className="row">
              <img id="photo" src={profilePicture} className="img-responsive " alt="cover" />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default About;