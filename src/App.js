import React, { useState } from 'react';
import './App.css'

import About from './components/About/About';
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true)
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactFormSelected, setContactFormSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="main">
      <div className="cover">
        <NavBar
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactFormSelected={contactFormSelected}
          setContactFormSelected={setContactFormSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        >
        </NavBar>

        <main>
          {contactFormSelected
            ? <ContactForm></ContactForm>
            : [
              portfolioSelected
                ? <Portfolio></Portfolio>
                : [
                  resumeSelected
                    ? <Resume></Resume>
                    : [
                      !contactFormSelected && !portfolioSelected && !resumeSelected
                        ? <About></About>
                        : <About></About>
                    ]
                ]
            ]
          }
        </main>

        <div>
          <Footer></Footer>
        </div>

      </div>
    </div>
  );
}

export default App;