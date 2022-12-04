import React, { useEffect } from "react";
import './NavBar.css'

// function Nav(props) {
//   const {
//     categories = [],
//     aboutSelected,
//     setAboutSelected,
//     projectsSelected,
//     setprojectsSelected,
//   } = props;
// }

function NavBar(props) {
  const {
    contactFormSelected,
    setContactFormSelected
  } = props;

  return (
    <header className="nav-main flex-row p-2 mt-4 mb-4">
      <div className="nav-menu row justify-content me-1 mt-1 mb-1">

        <a id="home-area" className="text-start col-6 align-self-center" href="/" >
          <span className="nav-home ms-4 mt-4" onClick={() => setContactFormSelected(false)}>Home</span>
        </a>

        <nav id="nav-elements" className="text-end col-6 align-self-end">
          {/* <ul className="text-center align-middle m-2"> */}
          <div className="row me-0">

            <li className="col text-center align-middle m-b2">
              <a className="text-start " href="#about">
                <span className="text-center align-middle nav-links ms-4 mt-4" onClick={() => setContactFormSelected(false)} >About me</span>
              </a>
            </li>
            <li className="col text-center align-middle">
              <a href="#portfolio">
                <span className="text-center nav-links ms-4 mt-4" onClick={() => setContactFormSelected(false)}>Portfolio</span>
              </a>
            </li>
            <li className="col text-center align-middle">
              <a href="#contact">
                <span className={`text-center nav-links ms-4 mt-4 ${contactFormSelected && 'navActive'}`} onClick={() => setContactFormSelected(true)}>Contact</span>
              </a>
            </li>
          </div>
          {/* </ul> */}
        </nav>

      </div>
    </header>
  )
}

export default NavBar