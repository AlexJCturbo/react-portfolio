import React, { useState } from 'react';
import './App.css'

import About from './components/About/About';
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// const coverImage = new URL('./assets/images/cover.jpg', import.meta.url);

function App() {
  const [contactFormSelected, setContactFormSelected] = useState(false);

  return (
    <div className="main">
      <div className="cover">
        {/* <Routes> */}
        <NavBar
          contactFormSelected={contactFormSelected}
          setContactFormSelected={setContactFormSelected}
        >
        </NavBar>
        {/* <Route index element={<NavBar />} /> */}
        <main>
          {!contactFormSelected ? (
            <>
              <About></About>
              <Projects></Projects>
              {/* <Route path="about" element={<About />} /> */}
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
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