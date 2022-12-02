import React from "react";
import './About.css'
import cover from '../../assets/images/cover.jpg'
import video from '../../assets/videos/background_video/futuristic_plexus1.mp4'

//Stock footage provided by A Luna Blue, downloaded from videvo.net
function About() {
  return (
    <div>
      <main>
        <div className="main-section">
          {/* <div className="background-screen"></div>
          <div className="background" style={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: 'no-repeat'
          }}> */}
          <h1 id="header-about">About Section</h1>
          <div className="content">
            <h4>Test</h4>
            <p>Text test</p>
          </div>
        </div>

        {/* cover image */}
        {/* <img src={cover} className="cover" style={{ width: "100%", height: "100%" }} alt="piece of code that fades from the center to the edges"></img> */}
        {/* </div> */}
      </main>
    </div>

  )
}

export default About;