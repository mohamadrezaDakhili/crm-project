import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "../view/Main/StartPage/StartPage";

function Router(props) {
  const { initialData } = props;
  // console.log(initialData.logo_url);

  return (
    <Switch>
      {[0, 1, 2, 3].map((item, index) => {
        console.log(`/question-${index}`);
        return <Route path={`/question-${index}`}>{item}</Route>;
      })}
      <Route path="/">
        <StartPage initialData={{ ...initialData }} />
      </Route>
    </Switch>
  );
}

export default Router;
