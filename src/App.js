import React from 'react';
import './App.css'
// import video from './assets/videos/background_video/futuristic_plexus1.mp4'

import About from './components/About/About';
import NavBar from './components/NavBar/NavBar'
import RoomCards from './components/RoomCards/RoomCards';

const coverImage = new URL('./assets/images/cover.jpg', import.meta.url);

function App() {
  return (
    <div className="main">
      <div className="cover">
        <NavBar></NavBar>
        <main>
          <About></About>
          {/* <RoomCards></RoomCards> */}
        </main>

      </div>
    </div>
  );
}

export default App;
