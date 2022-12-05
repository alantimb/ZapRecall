import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import styled, { StyledComponent } from "styled-components";
import { useState } from "react";

function Flashcard({ number, cardQuestion, cardAnswer }) {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const buttons = [
    <button onClick={() => setArrowClicked(null)}>Não lembrei!</button>,
    <button onClick={() => setArrowClicked(null)}>Quase não lembrei</button>,
    <button onClick={() => setArrowClicked(null)}>Zap!</button>,
  ];

  return (
    <>
      {arrowClicked ? (
        <OpenedCard>
          <p>{showAnswer ? cardAnswer : cardQuestion}</p>
          {showAnswer ? (
            <ButtonsQuestion>{buttons.map((b) => b)}</ButtonsQuestion>
          ) : (
            <img src={seta_virar} onClick={() => setShowAnswer(true)} />
          )}
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

const ButtonsQuestion = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 90px;
    font-family: "Recursive", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
  }
`;
