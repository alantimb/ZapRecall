import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import styled, { StyledComponent } from "styled-components";
import { useState } from "react";

function Flashcard({ number, cardQuestion, cardAnswer }) {
  // function isItTurned(arrowClicked) {
  //   if (arrowClicked === true) {
  //   }, show, setShow
  // }
  console.log(cardAnswer);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [show, setShow] = useState(null);
  console.log(cardQuestion);

  return (
    <>
      {arrowClicked ? (
        <OpenedCard>
          <p>{!show ? cardQuestion : cardAnswer}</p>
          <img src={seta_virar} onClick={() => setShow(true)} />
        </OpenedCard>
      ) : (
        <ClosedCard>
          <p>Pergunta {number + 1}</p>
          <img src={seta_play} onClick={() => setArrowClicked(true)} />
        </ClosedCard>
      )}
    </>
  );
}

export default Flashcard;

const ClosedCard = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive", cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const OpenedCard = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
