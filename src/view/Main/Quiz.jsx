import React from "react";
import { Col, Row } from "reactstrap";
import "./quiz.css";
import { useHistory, useParams } from "react-router-dom";
import StepperTest from "../Header/StepperQuiz";

function Quiz(props) {
  const history = useHistory();
  const params = useParams();
  const { list } = props;

  const isNextFinish = () => {
    if (props.list.length === Number(params["index"]) + 1) {
      return "/finish";
    } else {
      return `/question/${Number(params["index"]) + 1}`;
    }
  };

  return (
    <div className="h-100 w-100 row align-items-center position-relative">
      <StepperTest />
      <Col xl={12} className="text-center">
        <div className="txt-main-crm pb-5">{list[params["index"]].text}</div>
        <Row
          dir="rtl"
          className="flex-column flex-md-row justify-content-md-between p-0 m-0 mt-5 pt-5"
        >
          {list[params["index"]].options.map((item, index) => (
            <div
              onClick={() => history.push(isNextFinish())}
              className="answerItem"
              key={index}
            >
              {item.text}
            </div>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default Quiz;
