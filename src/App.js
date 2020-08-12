import React, { useState } from "react";
import "./App.css";
import LayoutContainer from "./view/Layuot.jsx";
import Footer from "./view/Footer/Footer.jsx";

function App() {
  const [initialData, setInitialData] = useState({
    organization_name: "Tap30",
    organization_name_fa: "تپ‌سی",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tapsi_new_logo.png",
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
      {
        id: "2",
        text: "آیا از خدمات راضی هستید؟",
        options: [
          { key: 1, text: "راضی " },
          { key: 2, text: "ای نیست" },
          { key: 3, text: "tttt" },
        ],
      },
      {
        id: "3",
        text: "آیا از خدمات راضی هستید؟",
        options: [
          { key: 1, text: " ام" },
          { key: 2, text: "ا نیست" },
          { key: 3, text: "eee" },
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
    </div>
  );
}

export default App;
