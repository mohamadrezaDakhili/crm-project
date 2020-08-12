import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import StartPage from "../view/Main/StartPage/StartPage";
import Quiz from "../view/Main/Quiz";
import EndPage from "../view/Main/EndPage/EndPage";
import Footer from "../view/Footer/Footer";
function Router(props) {
  const { initialData } = props;
  const { pathname: pathName } = useLocation();
  return (
    <Switch>
      <Route path={"/"}>
        <Switch>
          <Route path="/finish">
            <EndPage />
          </Route>

          <Route path="/question/:index">
            <Quiz list={initialData.questions} />
          </Route>

          <Route path="/" exact>
            <StartPage initialData={{ ...initialData }} />
          </Route>
        </Switch>
        <Footer path={pathName} />
      </Route>
    </Switch>
  );
}

export default Router;
