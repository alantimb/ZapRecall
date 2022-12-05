import Footer from "./Footer";
import Header from "./Header";
import Flashcard from "./Flashcard";
import { useState } from "react";
import colors from "../assets/css/colors";

function MainPage({ cards }) {
  

  return (
    <>
      <Header />

      {cards.map((card, i) => (
        <Flashcard
          key={i}
          number={i}
          cardQuestion={card.question}
          cardAnswer={card.answer}
          // arrowClicked={arrowClicked}
          // setArrowClicked={setArrowClicked}
        />
      ))}

      <Footer cards={cards}/>
    </>
  );
}

export default MainPage;
