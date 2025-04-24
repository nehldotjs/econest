import React from "react";
import "./App.css";

import Hero from "./Page/HeroSection";
import Body from "./Page/Body";
import Footer from "./Page/Footer";

function App() {
  return (
    <div className="main">
      <Hero />
      <div className="contentWrapper">
        <div className="contents">
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;