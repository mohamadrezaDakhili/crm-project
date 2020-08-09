import React, { useState, useEffect } from "react";
import "./App.css";
import LayoutContainer from "./view/Layuot.jsx";
import Footer from "./view/Footer/Footer.jsx";

function App() {
  const [backgroundImage, setBackground] = useState();

  useEffect(() => {
    setBackground(
      "http://www.textures4photoshop.com/tex/thumbs/space-background-with-starfield-free-download-thumb45.jpg"
    );
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      className="position-relative"
    >
      <div
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
        }}
        className="img-background"
      ></div>

      <LayoutContainer />
      <Footer />
    </div>
  );
}

export default App;
