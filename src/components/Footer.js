import styled, { StyledComponent } from "styled-components";

function Footer({ cards, count }) {
  return (
    <FooterCounter data-test="footer">
      <h1>
        {count}/{cards.length} CONCLUÍDOS
      </h1>
    </FooterCounter>
  );
}

export default Footer;

const FooterCounter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
