import "./assets/css/style.css";
import GlobalStyle from "./assets/css/globalStyle";
import MainPage from "./components/MainPage";
import HomePage from "./components/HomePage";
import { useState } from "react";
import styled, { StyledComponent } from "styled-components";

const cards = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão da linguagem JavaScript",
  },
  {
    question: "O React é __",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
  },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "Interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
  {
    question: "Styled Components é uma biblioteca do React que serve para __",
    answer:
      "Substituir o arquivo CSS padrão por um código JavaScript reduzindo os atributos 'classNames'",
  },
  {
    question: "Usamos desestruturação para __",
    answer:
      "Guardar as informações dos índices de um array ou elementos de um objeto em variáveis",
  },
];

function App() {
  const [mainPage, setMainPage] = useState(false);

  return (
    <ScreenContainer>
      <GlobalStyle />
      {mainPage ? (
        <MainPage cards={cards} />
      ) : (
        <HomePage changePage={() => setMainPage(true)} />
      )}
    </ScreenContainer>
  );
}

export default App;

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
