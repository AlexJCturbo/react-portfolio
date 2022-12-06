import React from "react";
import './Resume.css';
import resume from '../../assets/resume/resume_draft_Alejandro_Jaimes.pdf'

function Resume() {
  //Arrays of badges
  const techsFrontEnd = [
    { name: 'HTML5', url: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS', url: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'Bootstrap', url: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
    { name: 'jQuery', url: 'https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white' },
    { name: 'React', url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' }
  ]

  const techsBackEnd = [
    { name: 'Node.js', url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Express.js', url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
    { name: 'MySQL', url: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'SQLite', url: 'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white' },
    { name: 'Sequelize', url: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white' },
    { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'GraphQL', url: 'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white' }
  ]

  const downloadResume = () => {
    fetch(resume)
      .then(response => {
        response.blob()
          .then(blob => {
            const fileUrl = window.URL.createObjectURL(blob);
            let aLink = document.createElement('a');
            aLink.href = fileUrl;
            aLink.download = resume;
            aLink.click();
          })
      })
  }

  return (
    <div className="resume-main row m-4 pb-2">

      <div className="col-lg-4 mt-3">
        <div className="content ms-3 pt-1 ps-2">
          <h1 className="ps-1" id="portfolio-header-1">Resume</h1>
        </div>
      </div>

      <div className="col-lg-8 mt-3">
        <div className="container pt-1 ps-2">
          <div className="row row-cols-auto techs pt-2 ps-1">

            <div id="front-end col-6">
              <h3 className="ps-1">Front End</h3>
              <ul class="container text-center">
                {techsFrontEnd.map((tech) => (
                  <li className="row row-cols-auto pt-1 pb-1 projects">
                    <img id="badges" className={`col align-self-start p-2 ${tech.name}`} src={`${tech.url}`} alt="HTML icon"></img>
                    <div className="col align-self-center">{tech.name}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div id="back-end col-6">
              <h3 className="ps-1">Back End</h3>
              <ul class="container text-center">
                {techsBackEnd.map((tech) => (
                  <li className="row row-cols-auto pt-1 pb-1 projects">
                    <img id="badges" className={`col align-self-start p-2 ${tech.name}`} src={`${tech.url}`} alt="HTML icon"></img>
                    <div className="col align-self-center">{tech.name}</div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="App mt-5 mb-5 pb-5 align-self-center">
        <button type="button" class="download-btn btn-lg mt-3 mb-5" onClick={downloadResume}>Download Resume</button>
      </div>

    </div>
  )
}

export default Resume;