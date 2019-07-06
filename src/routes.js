import React from "react";
import { Switch, Route } from "react-router-dom";
import Lunches from "./pages/Lunches";
import Lunch from "./pages/Lunch";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Lunches} />
      <Route path={`/lunches/:id`} component={Lunch} />
    </Switch>
  );
}

export default Routes;
