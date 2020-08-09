import React from "react";
import { Row, Col } from "reactstrap";
import "./footer.css";
import logoBrand from "../../logo-tapsi.png";
function Footer() {
  return (
    <Row xs={12} className="box-footer p-0 m-0">
      <Col xs={6}>
        <Row>
          <Col xs={12} className="pb-2 fix-title-footer">
            <div className="mr-3 p-1 box-logo">solly</div>
            <span>قدرت گرفته از</span>
          </Col>
          <Col dir="rtl" xs={12} className="fix-text-footer">
            پلتفرم طراحی فرم های CRM آنلاین
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        <Row className="justify-content-end pr-3 h-100 align-items-center">
          <img src={logoBrand} alt="logo" width="230px" />
        </Row>
      </Col>
    </Row>

    // <Row className="box-footer p-0 m-0">
    //   <Col xs={12} className="pb-2 text-center fix-title-footer bg-danger ">
    //     <div className="mr-3 p-1 box-logo">solly</div>
    //     <span>قدرت گرفته از</span>
    //   </Col>
    //   <Col dir="rtl" xs={12} className="text-center fix-text-footer bg-danger">
    //     پلتفرم طراحی فرم های CRM آنلاین
    //   </Col>
    // </Row>
  );
}

export default Footer;
