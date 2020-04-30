import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ViewScores from "./ViewScores";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const AppPack = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/viewscores" component={ViewScores}></Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <AppPack />
  </BrowserRouter>,
  document.getElementById("root")
);
