import logo from "../assets/img/logo.png";
import styled, { StyledComponent } from "styled-components";

function HomePage({changePage}) {
  return (
    <>
      <ScreenContainer>
        <img src={logo} />
        <h1>ZapRecall</h1>
        <button onClick={changePage}>Iniciar Recall!</button>
      </ScreenContainer>
    </>
  );
}

export default HomePage;

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;

  img {
    width: auto;
    margin-bottom: 15px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }

  button {
    margin-top: 30px;
    width: 250px;
    height: 55px;
    background-color: #ffffff;
    border: 1px solid #d70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    color: #d70900;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
`;
