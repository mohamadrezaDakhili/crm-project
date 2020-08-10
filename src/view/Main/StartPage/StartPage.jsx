import React from "react";
import { Col } from "reactstrap";
import logoBrand from "../../../logo-tapsi.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function StartPage(props) {
  const { initialData } = props;
  console.log(initialData.logo_url);
  let history = useHistory();
  return (
    <Col xl={12} className="text-center">
      <div className="txt-main-crm">فرم نظرسنجی و ارتقا سطح خدمت رسانی</div>
      <div className="mt-4 mb-5">
        <img src={initialData.logo_url} alt="logo" width="330px" />
      </div>
      {/* <Link to="/question-3"> */}
      <button
        onClick={() => history.push("/question-2")}
        className="mt-5 button-start"
      >
        شروع
      </button>
      {/* </Link> */}
    </Col>
  );
}

export default StartPage;
