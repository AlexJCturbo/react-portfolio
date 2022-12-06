import React from "react";
import './NavBar.css'

function NavBar(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactFormSelected,
    setContactFormSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <header className="nav-main flex-row p-2 mt-4 mb-4">
      <div className="nav-menu row justify-content me-1 mt-1 mb-1">

        <a id="home-area" className="text-start col col-lg-4 align-self-center" href="/" >
          <span className="nav-home ms-4 mt-4" onClick={() => setContactFormSelected(false)}>Alejandro Jaimes</span>
        </a>

        <nav id="nav-elements" className="text-end col col-lg-8 align-self-end">
          <div className="row me-0">

            <li className="col text-center align-middle m-b2">
              <a className="text-start " href="#about">
                <span className={`text-center nav-links align-middle ms-4 mt-4 ${aboutSelected && 'navActive'}`} onClick={() => {
                  setAboutSelected(true)
                  setResumeSelected(false)
                  setContactFormSelected(false)
                  setPortfolioSelected(false)
                }} >About me</span>
              </a>
            </li>
            <li className="col text-center align-middle">
              <a href="#portfolio">
                <span className={`text-center nav-links ms-4 mt-4 ${portfolioSelected && 'navActive'}`} onClick={() => {
                  setPortfolioSelected(true)
                  setResumeSelected(false)
                  setContactFormSelected(false)
                  setAboutSelected(false)
                }}>Portfolio</span>
              </a>
            </li>
            <li className="col text-center align-middle">
              <a href="#contact">
                <span className={`text-center nav-links ms-4 mt-4 ${contactFormSelected && 'navActive'}`} onClick={() => {
                  setContactFormSelected(true)
                  setResumeSelected(false)
                  setPortfolioSelected(false)
                  setAboutSelected(false)
                }}>Contact</span>
              </a>
            </li>

            <li className="col text-center align-middle">
              <a href="#resume">
                <span className={`text-center nav-links ms-4 mt-4 ${resumeSelected && 'navActive'}`} onClick={() => {
                  setResumeSelected(true)
                  setContactFormSelected(false)
                  setPortfolioSelected(false)
                  setAboutSelected(false)
                }}>Resume</span>
              </a>
            </li>

          </div>
        </nav>

      </div>
    </header>
  )
}

export default NavBar