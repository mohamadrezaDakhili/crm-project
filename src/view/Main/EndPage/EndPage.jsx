import React from "react";
import { Col } from "reactstrap";
import logoBrand from "../../../logo-tapsi.png";

function EndPage() {
  return (
    <Col xl={12} className="text-center">
      <div className="txt-main-crm pb-5">
        با تشکر از وقتی که صرف پاسخگویی به سوالات کردید
      </div>
      <div className="mt-4 mt-5 pt-5">
        <img src={logoBrand} alt="logo" width="330px" />
      </div>
    </Col>
  );
}

export default EndPage;
