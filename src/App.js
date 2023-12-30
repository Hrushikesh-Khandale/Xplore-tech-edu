import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footers from "./components/Footers";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Switch>
        <Route exact path="/" component={Footers} />
      </Switch>
    </Router>
  );
};

export default App;
