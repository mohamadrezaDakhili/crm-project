import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "../view/Main/StartPage/StartPage";
import Quiz from "../view/Main/Quiz";
import EndPage from "../view/Main/EndPage/EndPage";
function Router(props) {
  const { initialData } = props;

  return (
    <Switch>
      <Route path="/finish">
        <EndPage />
      </Route>

      <Route path="/question/:index">
        <Quiz list={initialData.questions} />
      </Route>

      <Route path="/">
        <StartPage initialData={{ ...initialData }} />
      </Route>
    </Switch>
  );
}

export default Router;
