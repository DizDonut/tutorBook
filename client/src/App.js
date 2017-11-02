import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";
import AddStudentPage from "./pages/AddStudentPage";
import TutorAccount from "./pages/TutorAccount";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


const App = () =>
<Router>
  <MuiThemeProvider>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Tutors" component={Tutors} />
        <Route exact path="/Student" component={Student} />
        <Route exact path="/Tutors/account" component={TutorAccount} />
        <Route exact path="/Tutors/addStudent" component={AddStudentPage} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
      </Switch>
    </div>
  </MuiThemeProvider>
</Router>;

export default App;
