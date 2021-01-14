import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../helpers/history";

import Landing from "./landing";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
