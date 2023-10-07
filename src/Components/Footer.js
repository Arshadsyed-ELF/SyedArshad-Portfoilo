import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { Facebook, Github, Instagram, Linkedin, Messenger, Twitter, Whatsapp } from "react-bootstrap-icons";



export const Footer = () => {

  const phoneNumber = "+919505221870";
  // const phoneNumber = "+1234567890"; // Replace with the desired phone number
  const message = "Hello, I'd like to chat with you!"; // Replace with your desired message

  // Encode the phone number and message for use in the URL
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp URL format: whatsapp://send?phone=<phone_number>&text=<message>
  const whatsappURL = `whatsapp://send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;


  return (
    <footer className="footer" >
      <Container>
        <Row className="align-items-center" id="footer">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{paddingTop:"50px"}}>
              <a href="https://www.linkedin.com/in/syed-arshad-782a08226"><Linkedin/></a>
              <a href="https://github.com/Arshadsyed-ELF"><Github color="black"/></a>
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer"><Whatsapp color="green"/> </a>
              <a href="https://twitter.com/Syedarshad28403"><Twitter /> </a>
              <a href="https://www.instagram.com/abul.arshad/"><Instagram color="#AA367C"/></a>
            </div>
            
            <p>Call us on : <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
            <p>Email us on <a href="mailto:arshad@gmail.com"> arshadsyed074@gmail.com
            </a>  </p>
      
           

            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
