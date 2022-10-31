import { React } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import { data } from './data';
import { data2 } from './data2';
import { GrFacebook, GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";


//import styled from "styled-components";
//import { GrFacebook, GrLinkedin, GrInstagram } from "react-icons/gr";
//import { FaDiscord } from "react-icons/fa";

/* 
color schemes
black 110704
beige FFF4D6
orange F57600
*/

export default function Home() {
// const slider = document.querySelector('.card');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3;
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });
  
  return (
    <>
      <Row className="nav">
        <img className="navBack"
          src="./images/cubicle-bg-1920x750.png"
          alt="nav background"
          width="100%"
        ></img>
          <Col className="navCard">
            <img className="navCard"
              src="./images/cubicle-box-mockup-800px-v2.png"
              alt="nav card"
            ></img>
          </Col>
          <Col className="navBio">
            <h1 className="navH1">CUBICLE</h1>
            <p className="navP">The Workplace-Themed Party Game <br></br> You Definitely Shouldn't Play at Work.
            </p>
            <button className="navButton">  NOW ON KICKSTARTER  </button>
          </Col>
      </Row>
      <Row className="join">
        <Col className="joinBio">
          <h2 className="joinH1">JOIN OUR KICKSTARTER</h2>
          <p className="joinP">Cubicle is looking for people to incorporate into our team and enjoy great benefits depending on which one you choose. Join us on our journey to become the number one supplier of fun! Here at Cubicle, we want to introduce a new way to work and have fun at the same time.
          </p>
          <button className="navButton">  READ MORE  </button>
          <div className="topCards">
            <img className="top1"
              src="./cards/top3/excuse-remote-work.png"
              alt="top1"
            ></img>
            <img className="top2"
              src="./cards/top3/cubicle-supply-dirty-microwave.png"
              alt="top2"
            ></img>
            <img className="top3"
              src="./cards/top3/cubicle-job-title-lawyer.png"
              alt="top3"
            ></img>
          </div>
        </Col>
      </Row>
      <Row className="mobileNavCard">
          <img className="mobileNavCard"
            src="./images/cubicle-box-mockup-800px-v2.png"
            alt="nav card"
          ></img>
      </Row>
      <Row className="media">
        <Col className="cubicleMov">
          <video
              src='./images/cubicle-video.mp4'
              autoPlay
              muted
              loop
            />
        </Col>
        <Col className="mediaBio">
          <h2 className="joinH1"> ABOUT THOSE <br></br>TPS REPORTS </h2>
          <p className="joinP">Cubicle isn’t your average company. We’ve revolutionized the way office culture should operate. Here at Cubicle, we value creativity and being open with one another. We’ve made it a workplace that you love to hate.
          </p>
        </Col>
      </Row>
      <Row className="cardReel">
        <div className="inner-slider">
          {data.map((item) => (
            <div className="card">
              <img
                className="sliderCard"
                src={item.img}
                alt={item.id}
              />
            </div>
            ))}
        </div>
      </Row>
      <Row className="cardReel2">
        <div className="inner-slider2">
          {data2.map((item) => (
            <div className="card">
              <img
                className="sliderCard"
                src={item.img}
                alt={item.id}
              />
            </div>
            ))}
        </div>
      </Row>
      <Row className="signUp">
          <img className="signUpCubicle"
            src="./images/footer.png"
            alt="signUp"
          ></img>
          <Col className="signUpBio">
            <h3 className="signUpH1">CUBICLE <br></br>KICKSTARTER</h3>
            <button className="signUpButton">APPLY WITHIN</button>
          </Col>
        <div className='footer'>
            <ul className="social">
              <div className="socialIcon"><a href="https://www.facebook.com/UnderscoreGamesOfficial" target='_blank' rel='noreferrer'><GrFacebook color={'#FFF4D6'} /></a></div>
              <div className="socialIcon"><a href="https://discord.gg/H6EPyQCCuE" target='_blank' rel='noreferrer'><FaDiscord color={'#FFF4D6'} /></a></div>
              <div className="socialIcon"><a href="https://instagram.com/underscoregames" target='_blank' rel='noreferrer'><GrInstagram color={'#FFF4D6'} /></a></div>
              <div className="socialIcon"><a href="https://www.linkedin.com/company/underscoregames/" target='_blank' rel='noreferrer'><GrLinkedin color={'#FFF4D6'} /></a></div>
            </ul>
        </div>
      </Row>
    </>
  );
}