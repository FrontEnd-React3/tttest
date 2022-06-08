import React from "react";
import REACTDOM from "react-dom/client";
// import DownButton from "./downbutton";
import "./App.css";
import mypicture from "./image/vanessaSmall.jpg";
import Scroller from "./scroller";
function App() {
  return (
    <div className="App">
      <div className="container">
      <Scroller />
        <img src={mypicture} className="mypicture" alt="mypicture" />
        <div id="toptitle" className="title">
          Hi
        </div>
        <div id="sndtitle" className="title">
          I'm Vanessa
        </div>
        <div id="rdtitle" className="title">
          React Developer
        </div>
        <div id="myline"></div>
      </div>

    </div>
  );
}

export default App;
