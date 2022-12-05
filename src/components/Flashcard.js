import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import iconCerto from "../assets/img/icone_certo.png";
import iconErro from "../assets/img/icone_erro.png";
import iconQuase from "../assets/img/icone_quase.png";
import Footer from "./Footer";
import styled, { StyledComponent } from "styled-components";
import { useState } from "react";
import colors from "../assets/css/colors";

function Flashcard({ number, cardQuestion, cardAnswer, key, cards }) {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const { green, yellow, red, gray } = colors;
  const [textColor, setTextColor] = useState(gray);
  const [count, setCount] = useState([]);

  const buttons = [
    <button
      data-test="no-btn"
      onClick={() => (setTextColor(red) ? counter("error") : counter("error"))}
    >
      Não lembrei!
    </button>,
    <button
      data-test="partial-btn"
      onClick={() =>
        setTextColor(yellow) ? counter("almost") : counter("almost")
      }
    >
      Quase não lembrei
    </button>,
    <button
      data-test="zap-btn"
      onClick={() =>
        setTextColor(green) ? counter("rigth") : counter("rigth")
      }
    >
      Zap!
    </button>,
  ];

  function counter(item) {
    if (true) {
      let newCount = [...count, item];
      setCount(newCount);
      setArrowClicked(false);
    }
  }

  function cardIcon(textColor) {
    switch (textColor) {
      case "#FF3030":
        return <img src={iconErro} data-test="no-icon" />;
        break;
      case "#FF922E":
        return <img src={iconQuase} data-test="zap-icon" />;
        break;
      case "#2FBE34":
        return <img src={iconCerto} data-test="partial-icon" />;
        break;
      default:
        return <img src={seta_play} onClick={() => setArrowClicked(true)} />;
        break;
    }
  }

  return (
    <>
      {arrowClicked ? (
        <OpenedCard>
          <p data-test="flashcard-text">
            {showAnswer ? cardAnswer : cardQuestion}
          </p>
          {showAnswer ? (
            <ButtonsQuestion>{buttons.map((b, i) => b)}</ButtonsQuestion>
          ) : (
            <img
              src={seta_virar}
              data-test="turn-btn"
              onClick={() => setShowAnswer(true)}
            />
          )}
        </OpenedCard>
      ) : (
        <ClosedCard data-test="flashcard" color={textColor}>
          <p data-test="flashcard-text">Pergunta {number + 1}</p>
          {textColor === "#333333" ? (
            <img
              src={seta_play}
              data-test="play-btn"
              onClick={() => setArrowClicked(true)}
            />
          ) : (
            cardIcon(textColor)
          )}
        </ClosedCard>
      )}

      <Footer cards={cards} count={count.length} />
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
    color: ${(props) => props.color};
    text-decoration: ${(props) =>
      props.color == "#333333" ? "none" : "line-through"};
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
    border-radius: 5px;
    padding: 5px;
    border: 0px;
    &:nth-child(1) {
      background-color: #ff3030;
    }
    &:nth-child(2) {
      background-color: #ff922e;
    }
    &:nth-child(3) {
      background-color: #2fbe34;
    }
  }
`;
