import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Hero from "./Page/HeroSection";
import Body from "./Page/Body";
import Footer from "./Page/Footer";

function App() {
  return (
    <BrowserRouter basename="/econest">
      <div className="main">
        <Hero />
        <div className="contentWrapper">
          <div className="contents">
            <Body />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
