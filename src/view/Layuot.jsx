import React from "react";
import { Container, Col } from "reactstrap";
import "./layout.css";
import logoBrand from "../logo-tapsi.png";
import Quiz from "./Main/Quiz";
import EndPage from "./Main/EndPage/EndPage";
import Router from "../Router/index";
function Layuot(props) {
  const { initialData } = props;
  return (
    <Container>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="row justify-content-center align-items-center p-0 m-0"
      >
        <Router initialData={{ ...initialData }} />
        {/* <Quiz /> */}

        {/* <EndPage /> */}
      </div>
    </Container>
  );
}

export default Layuot;
