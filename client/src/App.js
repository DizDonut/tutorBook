import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";

const App = () =>
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Tutors" component={Tutors} />
      {/* <Route exact path="/books/:id" component={Detail} />
      <Route component={NoMatch} /> */} */}
    </Switch>
  </div>
</Router>;

export default App;
