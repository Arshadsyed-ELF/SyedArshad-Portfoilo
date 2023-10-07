
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Frontend Developer", "Full Stack Developer" ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Arshad`} <span className="txt-rotate" dataPeriod="700" data-rotate='[ "Web Developer", "Frontend Developer] ", "MERN Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p> Welcome to my portfolio, a gateway to a world where technology and creativity converge to form seamless digital experiences. I'm Arshad, a passionate and dedicated full-stack developer, and I'm thrilled to present a showcase of my skills and expertise.</p>
                  <p>In this digital realm, I've honed my abilities to master both the front-end and back-end landscapes, allowing me to architect and deliver comprehensive solutions that cater to every facet of a project. My journey as a full-stack developer has been one of continuous exploration, innovation, and the pursuit of excellence.</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <button ><a  href='Syed Abul Arshad.pdf' download="Arshad_Resume.pdf" style={{textDecoration:"none", color:"whitesmoke",}}>My Resume <ArrowRightCircle size={30} /></a> </button>
          

                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

