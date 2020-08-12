import React from "react";
import { Container } from "reactstrap";
import "./layout.css";
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
      </div>
    </Container>
  );
}

export default Layuot;
