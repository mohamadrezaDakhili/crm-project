import React from "react";
import { Col } from "reactstrap";
import { useHistory } from "react-router-dom";

function StartPage(props) {
  const { initialData } = props;
  let history = useHistory();
  return (
    <Col xl={12} className="text-center">
      <div className="txt-main-crm">فرم نظرسنجی و ارتقا سطح خدمت رسانی</div>
      <div className="mt-4 mb-5">
        <img src={initialData.logo_url} alt="logo" width="330px" />
      </div>
      <button
        onClick={() => history.push("/question/0")}
        className="mt-5 button-start"
      >
        شروع
      </button>
    </Col>
  );
}

export default StartPage;
