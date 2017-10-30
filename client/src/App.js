import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";
import AddStudentPage from "./pages/AddStudentPage";
import TutorAccount from "./pages/TutorAccount";

const App = () =>
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Tutors/:id" component={Tutors} />
      <Route exact path="/Student" component={Student} />
      <Route exact path="/Tutors/account/:id" component={TutorAccount} />
      <Route exact path="/Tutors/addStudent/:id" component={AddStudentPage} />
      {/* <Route exact path="/books/:id" component={Detail} /> */}
    </Switch>
  </div>
</Router>;

export default App;
