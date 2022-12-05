import Footer from "./Footer";
import Header from "./Header";
import Flashcard from "./Flashcard";
import { useState } from "react";

function MainPage({ cards }) {
  // const [show, setShow] = useState(false);

  return (
    <>
      <Header />

      {cards.map((card, i) => (
        <Flashcard
          number={i}
          cardQuestion={card.question}
          cardAnswer={card.answer}
          // show={show}
          // setShow={setShow}
        />
      ))}

      <Footer />
    </>
  );
}

export default MainPage;
