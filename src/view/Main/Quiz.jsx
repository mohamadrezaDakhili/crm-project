import React from "react";
import { Col, Row } from "reactstrap";
import "./quiz.css";

function Quiz() {
  return (
    <Col xl={12} className="text-center">
      <div className="txt-main-crm pb-5">
        آیا از زمان انتظار برای پیدا شدن سفیر تپ‌سی راضی هستید؟
      </div>

      <Row
        dir="rtl"
        className="flex-column flex-md-row justify-content-md-between p-0 m-0 mt-5 pt-5"
      >
        <div className="answerItem">راضی ام</div>
        <div className="answerItem">آره ولی اوکیه</div>
        <div className="answerItem">خیلی افتضاحه</div>
      </Row>
    </Col>
  );
}

export default Quiz;
