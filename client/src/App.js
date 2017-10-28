import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";

const App = () =>
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Tutors/:id" component={Tutors} />
      <Route exact path="/Student" component={Student} />
      {/* <Route exact path="/books/:id" component={Detail} /> */}
    </Switch>
  </div>
</Router>;

export default App;
