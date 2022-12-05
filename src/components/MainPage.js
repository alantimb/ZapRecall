import Header from "./Header";
import Flashcard from "./Flashcard";

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
          cards={cards}
        />
      ))}
    </>
  );
}

export default MainPage;
