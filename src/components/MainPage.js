import logo from "../assets/img/logo.png";
import Footer from "./Footer";

function MainPage() {
  return (
    <>
      <div className="screen-container">
        <div className="logo-container">
          <img src={logo} />
          <h1>ZapRecall</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
