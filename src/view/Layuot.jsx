import React from "react";
import { Container, Col } from "reactstrap";
import "./layout.css";
import logoBrand from "../logo-tapsi.png";
import Quiz from "./Main/Quiz";
import EndPage from "./Main/EndPage/EndPage";
function Layuot() {
  return (
    <Container>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="row justify-content-center align-items-center p-0 m-0"
      >
        {/* <Quiz /> */}
        <Col xl={12} className="text-center">
          <div className="txt-main-crm">فرم نظرسنجی و ارتقا سطح خدمت رسانی</div>
          <div className="mt-4 mb-5">
            <img src={logoBrand} alt="logo" width="330px" />
          </div>
          <button className="mt-5 button-start">شروع</button>
        </Col>
        {/* <EndPage /> */}
      </div>
    </Container>
  );
}

export default Layuot;
