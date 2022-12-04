import React from 'react';
// import { Routes, Route } from "react-router-dom";

import './App.css'
// import video from './assets/videos/background_video/futuristic_plexus1.mp4'

import About from './components/About/About';
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// const coverImage = new URL('./assets/images/cover.jpg', import.meta.url);

function App() {
  return (
    <div className="main">
      <div className="cover">
        {/* <Routes> */}
        <NavBar></NavBar>
        {/* <Route index element={<NavBar />} /> */}
        <main>
          <About></About>
          <Projects></Projects>
          {/* <Route path="about" element={<About />} /> */}

        </main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <Footer></Footer>
          {/* </Routes> */}
        </div>
      </div>
    </div>
  );
}

export default App;