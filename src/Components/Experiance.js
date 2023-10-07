import React from 'react'
import lines from "../assets/img/lines.png";
import "./experiance.css"

const Experiance = () => {
    return (
      
        <div className="experience-container" id='experiance'>
        <div className="experience-item text-center">
          <h1 id="line" style={{fontSize:"50px"}}>Experience</h1>
        </div>
        <div className="experience-item">
          <h1>Full Stack MERN Developer</h1>
        </div>
        <div className="experience-item">
          <span className="company-name"><a href='http://smart-bridge.co.in/index.asp' style={{textDecoration:"none",color:"blue"}}>Smart Bridge -</a></span>
          <span className="job-type">Internship</span>
          <div className="experience-description">
            <p>
              I worked as a Full Stack Developer in MERN Stack with Smart Bridge. I managed both frontend and backend parts of the codebase along with deployment, testing, and documentation as well. I also managed the whole team for some time there.
            </p>
          </div>
          <div className="experience-date">August 2023 - October 2023</div>
        </div>
        <div className="experience-item">
          <h1>Web Development</h1>
        </div>
        <div className="experience-item">
          <span className="company-name"><a href='https://viratpack.netlify.app/team' style={{textDecoration:"none",color:"blue"}}>Virat Pack -</a></span>
          <span className="job-type">Freelancing</span>
          <div className="experience-description">
            <p>
              I designed and developed a website for Virat Packaging, a Printing and Packaging company. I created a UI design in Canva and received feedback regarding it, then I developed the website using React.js.
            </p>
          </div>
          <div className="experience-date">July 2023 - August 2023</div>
        </div>
      </div>
    
      
      

    )
}

export default Experiance