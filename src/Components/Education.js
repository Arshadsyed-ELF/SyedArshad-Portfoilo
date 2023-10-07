import React from 'react'
import "./education.css"
const Education = () => {
    return (
        <div className="education-container">
        <section>
          <div className="text-center">
            <h1 className="section-title">Education</h1>
          </div>
          <div className="education-item">
            <h3 className="degree">Bachelor's Degree in Civil Engineering</h3>
            <p className="institution">Sri Venkateshwara College of Engineering and Technology</p>
            <h6 className="date">2018-2022</h6>
          </div>
          <div className="education-item">
            <h3 className="degree">Intermediate, State Board of Intermediate Education, AP</h3>
            <p className="institution">Scored 70.4% in Mpc</p>
            <h6 className="date">2018</h6>
          </div>
          <div className="education-item">
            <h3 className="degree">Secondary School, State Board of Secondary Education, AP</h3>
            <p className="institution">Scored 9.3 CGPA</p>
            <h6 className="date">2016</h6>
          </div>
        </section>
      </div>
      
    )
}

export default Education