import React from "react";
import "./App.css";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WildPage from "./Pages/WildPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={WildPage} />
      </Switch>
    </Router>
  );
}

export default App;
