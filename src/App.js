import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="tabs">
          <a href={"#home"} key={0}>
            <button className="homeButton">Home</button>
          </a>
          <a href={"#about"} key={1}>
            <button className="aboutButton">About</button>
          </a>
          <a href={"#projects"} key={2}>
            <button className="projectsButton">Projects</button>
          </a>
          <a href={"#awards"} key={3}>
            <button className="awardsButton">Awards</button>
          </a>
        </div>
        <main className="x" id="home">
          <section class="Home">
            <div className="titleLabel">
              <div className="tl1">Hi! I'm</div>
              <div className="tl2">Joshua</div>
              <div className="tl3">Developer.</div>
              <div className="tl3">Student.</div>
              <div className="tl3">Based in Singapore.</div>
              <div className="Socials">
                <Tooltip title="GitHub">
                  <a href={"https://github.com/JoshuaLimZK"}>
                    <IconButton aria-label="GH">
                      <GitHubIcon style={{ color: "white" }}/>
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href={"https://www.linkedin.com/in/joshua-lim-47a45a1a9/"}>
                    <IconButton aria-label="LI">
                      <LinkedInIcon style={{ color: "white" }}/>
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="Email">
                  <a href={"mailto:joshua_lim_zhe_kai@s2019.ssts.edu.sg"}>
                    <IconButton aria-label="EM">
                      <EmailIcon style={{ color: "white" }}/>
                    </IconButton>    
                  </a>
                </Tooltip>
              </div>
            </div>
          </section>
          <section class="About" id="about">
            <h1 class="AboutTitle">About</h1>
            <pr>
              Hi I'm Joshua Lim - A Secondary 4 student from School of Science and Technology, Singapore and full-stack developer with the experience working withv iOS and Web development
            </pr>
          </section>
          <section class="Projects" id="projects">
            <h1>Projects</h1>

            <h3>SST Innofest 2020 - REMI Bot</h3>
            <pr>Grand Final 2nd Place | Best Presentation Award</pr>

            <h3>Free Homework Manager 2022</h3>
            <pr>Computing+ Coursework 2022</pr>

            <h3>Grocermi</h3>
            <pr>Swift Accelerator Programme 2020</pr>

          </section>
          <section class="Awards" id="awards">
            <h1>Awards</h1>
          </section>
       </main>
      </header>
    </div>
  );
}

export default App;
