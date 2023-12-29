// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {



  return (
    <Router>
      <Navbar />
      <Homepage />
      <Switch>
        <Route exact path="/" component={Footer} />
      </Switch>
    </Router>
  );
};

export default App;
