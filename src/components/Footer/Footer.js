import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
      <footer className="flex-row my-auto">
        <div className="row h-100 me-0">
          <div className="my-auto">
            <div className="footer-div m-1">
              <a href="https://github.com/AlexJCturbo" target="_blank" rel="noreferrer"><span className="github p-2"><FontAwesomeIcon icon={faGithub} /> </span> </a>

              <a href="https://www.linkedin.com/in/alejandro-jc/" target="_blank" rel="noreferrer"><span className="linkedIn p-2"><FontAwesomeIcon icon={faLinkedin} /> </span> </a>

              <a href="https://twitter.com/alexjcturbo" target="_blank" rel="noreferrer"><span className="twitter p-2"><FontAwesomeIcon icon={faTwitter} /> </span> </a>

              <a href="https://www.instagram.com/alexjcturbo/" target="_blank" rel="noreferrer"><span className="instagram p-2"><FontAwesomeIcon icon={faInstagram} /> </span> </a>
            </div>
            <div>
              <p className="m-1">Created by Alex Jaimes</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;