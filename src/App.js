import React, { useState, useEffect } from "react";
import "./App.css";

import Hero from "./Page/HeroSection";
import Body from "./Page/Body";
import Footer from "./Page/Footer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update width
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
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
