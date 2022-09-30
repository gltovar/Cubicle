import { useEffect, useState, React } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import { data } from './data';

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
  // const [swipeStart, setSwipeStart] = useState(0);
  // const [swipeEnd, setSwipeEnd] = useState(0);
  // const [triggerSwipe, setTriggerSwipe] = useState(false);
  // const [eventCardArr] = useState(() => {
  //   const initArr = []
  //   for (let i = 1; i < 17; i++) {
  //     if (i < 10) {
  //       initArr.push(`Cards-0${i}`);
  //     } else {
  //       initArr.push(`Cards-${i}`);
  //     }
  //   }
  //   return initArr
  // });

  // const [cardOrder, setCardOrder] = useState(() => {
  //   const initArr = []
  //   for (let i = 0; i < 17; i++) {
  //     if (i === 0) {
  //       initArr.push([eventCardArr[i], "cardsmleft"]);
  //     } else if (i === 1) {
  //       initArr.push([eventCardArr[i], "cardmdleft"]);
  //     } else if (i === 2) {
  //       initArr.push([eventCardArr[i], "cardcenter"]);
  //     } else if (i === 3) {
  //       initArr.push([eventCardArr[i], "cardmdright"]);
  //     } else if (i === 4) {
  //       ;
  //       initArr.push([eventCardArr[i], "cardsmright"]);
  //     } else {
  //       initArr.push([eventCardArr[i], "none"]);
  //     }
  //   };
  //   return initArr
  // });

  // // useEffect(() => {
  // //   const cardTypeBtns = document.querySelectorAll(".cardTypeBtn");
  // //   cardTypeBtns.forEach(cardTypeBtn => {
  // //     cardTypeBtn.addEventListener("click", handleCardTypeClick);
  // //     return () => {
  // //       cardTypeBtn.removeEventListener("click", handleCardTypeClick);
  // //     };
  // //   })
  // // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const displayCard = document.querySelectorAll(".displayCard");
  //     displayCard.forEach(card => {
  //         card.addEventListener("mousedown", handleMouseDown);
  //         card.addEventListener("touchstart", handleMouseDown);
  //     });
  //   },1000)
  // });

  // // useEffect(() => {
  // //   if (cardType === "eventcards") {
  // //     setCardCount(27)
  // //   } else if (cardType === "objectcards") {
  // //     setCardCount(23)
  // //   }
  // // }, [cardType]);

  // useEffect(() => {
  //   setCardOrder(() => {
  //     const initArr = []
  //   for (let i = 0; i < 17; i++) {
  //       if (i === 0) {
  //         initArr.push([eventCardArr[i], "cardsmleft"]);
  //       } else if (i === 1) {
  //         initArr.push([eventCardArr[i], "cardmdleft"]);
  //       } else if (i === 2) {
  //         initArr.push([eventCardArr[i], "cardcenter"]);
  //       } else if (i === 3) {
  //         initArr.push([eventCardArr[i], "cardmdright"]);
  //       } else if (i === 4) {
  //         ;
  //         initArr.push([eventCardArr[i], "cardsmright"]);
  //       } else {
  //         initArr.push([eventCardArr[i], "none"]);
  //       }
  //     };
  //   return initArr
  //   })
  // }, [eventCardArr]);

  // useEffect(() => {
  //   const swipeAmount = swipeStart - swipeEnd;
  //   if (swipeAmount > 0 && triggerSwipe) {
  //     handleRightClick();
      
  //   } else if (swipeAmount < 0 && triggerSwipe) {
  //     handleLeftClick();
  //   }
  // }, [triggerSwipe, swipeEnd, swipeStart]);

  // function handleLeftClick() {
  //   let newCardArr = [];
  //   setCardOrder((prevState) => {
  //     prevState.map((card) => {
  //       const key = card[0];
  //       const order = parseInt(key.replace(/\D/g, ''));
  //       let newOrder;
  //       if (order === 1) {
  //         newOrder = prevState.length;
  //       } else {
  //         newOrder = order - 1;
  //       }
  //       if (newOrder > 9) {
  //         newCardArr.push([key.substring(0, 12) + newOrder, card[1]]);
  //       } else {
  //         newCardArr.push([key.substring(0, 12) + 0 + newOrder, card[1]]);
  //       }
  //       return null;
  //     });
  //     return newCardArr;
  //   });
  // }

  // function handleRightClick() {
  //   let newCardArr = [];
  //   setCardOrder((prevState) => {
  //     prevState.map((card) => {
  //       const key = card[0];
  //       const order = parseInt(key.replace(/\D/g, ''));
  //       let newOrder;
  //       if (order === prevState.length) {
  //         newOrder = 1;
  //       } else {
  //         newOrder = order + 1;
  //       }
  //       if (newOrder > 9) {
  //         newCardArr.push([key.substring(0, 12) + newOrder, card[1]]);
  //       } else {
  //         newCardArr.push([key.substring(0, 12) + 0 + newOrder, card[1]]);
  //       }
  //       return null;
  //     });
  //     return newCardArr;
  //   });
  // }


  // function handleMouseDown(e) {
  //   e.preventDefault();
  //   setTriggerSwipe(false);
  //   if (e.screenX === undefined) {
  //     setSwipeStart(e.touches[0].clientX);
  //   } else {
  //     setSwipeStart(e.screenX);
  //   }
  //   document.getElementById("cardId").addEventListener("mousemove", handleMouseMove);
  //   document.getElementById("cardId").addEventListener("touchmove", handleMouseMove);
  //   window.addEventListener("mouseup", handleMouseUp);
  //   window.addEventListener("touchend", handleMouseUp);
  //   }
    
  // function handleMouseUp(e) {
  //   document.getElementById("cardId").removeEventListener("mousemove", handleMouseMove);
  //   document.getElementById("cardId").removeEventListener("touchmove", handleMouseMove);
  //   setTriggerSwipe(true);
  //   }
    
  // function handleMouseMove(e) {
  //   if (e.screenX === undefined) {
  //     setSwipeEnd(e.touches[0].clientX);
  //   } else {
  //     setSwipeEnd(e.screenX);
  //   }
  // } 

  // function CardDisplay(props) {
  //   const cards = props.cardOrder;
  //   return (
  //     <div id="cardId">
  //       {cards.map((card) => (
  //         <img
  //           key={card[0]}
  //           id={card[0]}
  //           className={card[1] + " displayCard"}
  //           src={`/cards/${card[0]}.png`}
  //           alt={card[0]}
  //         />
  //       ))}
  //     </div>
  //   )
  // }
  
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
    </>
  );
}