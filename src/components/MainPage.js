import logo from "../assets/img/logo.png";

function MainPage() {
  return (
    <>
      <div className="screen-container">
        <div className="logo-container">
          <img src={logo} />
          <h1>ZapRecall</h1>
        </div>
      </div>
    </>
  );
}

export default MainPage;
