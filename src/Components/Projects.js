// import React from "react";
// import { Card } from "react-bootstrap";
// import line from "../assets/img/banner.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import "./Projects.css"

// export const Projects = () => {
//   return (
//     <div style={{ backgroundColor: "white", padding: "20px" }}>
//       <h1 className="text-center" style={{ fontSize: "50px" }}>
//         Projects
//       </h1>
//       <br />
//       <div className="carousel-container">
//         <Carousel>
//           <div className="carousel-item">
//             <img src={line} alt="Project 1" />
//             <p>
//               DoctorzBook is a real-time appointment booking application where
//               users can book appointments with doctors conveniently from their
//               homes. This application provides a very intuitive user experience
//               and tries to make the appointment process as easy as possible.
//             </p>
//           </div>
//           <div className="carousel-item">
//             <img src={line} alt="Project 2" />
//             <p>
//               DoctorzBook is a real-time appointment booking application where
//               users can book appointments with doctors conveniently from their
//               homes. This application provides a very intuitive user experience
//               and tries to make the appointment process as easy as possible.
//             </p>
//           </div>
//           <div className="carousel-item">
//             <img src={line} alt="Project 3" />
//             <p>
//               DoctorzBook is a real-time appointment booking application where
//               users can book appointments with doctors conveniently from their
//               homes. This application provides a very intuitive user experience
//               and tries to make the appointment process as easy as possible.
//             </p>
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// };


import React from "react";
import { Card } from "react-bootstrap";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p4.png";
import p3 from "../assets/img/p3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Projects.css"
import { Fonts, Github } from "react-bootstrap-icons";


export const Projects = () => {
  return (
    
    <div style={{ backgroundColor: "white", padding: "20px" ,}} className="experience-container" id="project">
      <h1 className="text-center" style={{ fontSize: "50px",textShadow:"15px 15px 20px",color:"green" }}>
        Projects
      </h1>
      <br />
      
      <div className="carousel-container">
        <Carousel infiniteLoop={true} autoPlay={true} showStatus={false}  interval={5000} showArrows={false} showIndicators={false}>
          <div className="carousel-item">
            <img src={p2} alt="Project 2" />
            <h5>Project Management Tool</h5>

            <p>
              DoctorzBook is a real-time appointment booking application where
              users can book appointments with doctors conveniently from their
              homes. This application provides a very intuitive user experience
              and tries to make the appointment process as easy as possible.
            </p>
            <a href="https://github.com/Arshadsyed-ELF/Project-Management-Tool" style={{color:"black",fontSize:"30px"}}><Github/></a>
          </div>
          <div className="carousel-item">
            <img src={p1} alt="Project 1"  />
            <h5>Campus Management System</h5>
            <p>
              DoctorzBook is a real-time appointment booking application where
              users can book appointments with doctors conveniently from their
              homes. This application provides a very intuitive user experience
              and tries to make the appointment process as easy as possible.
            </p>
            <a href="https://github.com/Arshadsyed-ELF/Campus-Management-System" style={{color:"black",fontSize:"30px"}}><Github/></a>
          </div>
          <div className="carousel-item">
            <img src={p3} alt="Project 3" />
            <h5>Mypolicy</h5>

            <p>
              DoctorzBook is a real-time appointment booking application where
              users can book appointments with doctors conveniently from their
              homes. This application provides a very intuitive user experience
              and tries to make the appointment process as easy as possible.
            </p>
           <a href="https://github.com/Arshadsyed-ELF/Mypolicy.com" style={{color:"black",fontSize:"30px"}}><Github/></a>

          </div>
        </Carousel>
      </div>
    </div>
    
  );
};
