import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./NewClass/HomeScreen";
import { HomeTest } from "./component/Test/HomeTest";
import SVG from "./NewClass/SVG";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
