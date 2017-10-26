import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Homepage2 from "./pages/Homepage2";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";

const App = () =>
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage2} />
      <Route exact path="/Tutors" component={Tutors} />
      <Route exact path="/Student" component={Student} />
      {/* <Route exact path="/books/:id" component={Detail} /> */}
    </Switch>
  </div>
</Router>;

export default App;
