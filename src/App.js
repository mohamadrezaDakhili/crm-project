import React, { useState, useEffect } from "react";
import "./App.css";

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
        backgroundImage: "url(" + backgroundImage + ")",
      }}
      className="img-background"
    ></div>
  );
}

export default App;
