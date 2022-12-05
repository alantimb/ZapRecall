import Footer from "./Footer";
import Header from "./Header";
import Flashcard from "./Flashcard";
import { useState } from "react";

function MainPage({ cards }) {
  return (
    <>
      <Header />

      {cards.map((card, i) => (
        <Flashcard
          number={i}
          cardQuestion={card.question}
          cardAnswer={card.cardAnswer}
        />
      ))}

      <Footer />
    </>
  );
}

export default MainPage;
