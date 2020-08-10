import React, { useState, useEffect } from "react";
import "./App.css";
import LayoutContainer from "./view/Layuot.jsx";
import Footer from "./view/Footer/Footer.jsx";

function App() {
  const [initialData, setInitialData] = useState({
    organization_name: "Tap30",
    organization_name_fa: "تپ‌سی",
    logo_url:
      "https://drive.google.com/file/d/1rHKQsmnEYKUguOirI01FMyN2FscOd1tW/view",
    background_url:
      "https://i.pinimg.com/originals/0c/c2/ac/0cc2accd3196c5db9eaaafbd5d51fbc2.jpg",
    questions: [
      {
        id: "1",
        text: "آیا از خدمات راضی هستید؟",
        options: [
          { key: 1, text: "راضی ام" },
          { key: 2, text: "ای بدک نیست" },
          { key: 3, text: "اصلا" },
        ],
      },
    ],
  });

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
          backgroundImage: "url(" + initialData.background_url + ")",
        }}
        className="img-background"
      ></div>

      <LayoutContainer initialData={initialData} />
      <Footer />
    </div>
  );
}

export default App;
