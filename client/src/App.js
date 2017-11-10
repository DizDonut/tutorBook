import React, {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom"; //
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
// import Student from "./pages/Student";
import AddStudentPage from "./pages/AddStudentPage";
// import Footer from "./components/Footer";
import TutorAccount from "./pages/TutorAccount";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import API from "./utils/API";
// import Login from "./components/Login";
// import Join from "./components/Join";

class App extends Component {
  // const App = () =>
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor:null,
      id: null,
      redirectTo: ""
    }
  }

  //todo: how to prevent page access if you're not logged in/ or unregisterd without using passport.

  //creates a localstorage key and value. used to provide initial userdata
  componentDidMount() {
    const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
      API.getTutor(query)
      .then(res => {
        this.setState({
          tutor: res.data,
          loggedIn: true
        })
      })
    }
  }

  render() {
    return (
        <Router>
          <MuiThemeProvider>
            <div>
              <Switch>
                {/* _logout={this._logout} loggedIn={this.state.loggedIn} tutor={this.state.tutor} */}
                <Route exact path="/"  tutor={this.state.tutor} component={Homepage} />
                <Route exact path="/Tutors" tutor={this.state.tutor} component={Tutors} />
                <Route exact path="/Tutors/account" tutor={this.state.tutor} component={TutorAccount} />
                <Route exact path="/Tutors/addStudent" tutor={this.state.tutor} component={AddStudentPage} />
                <Route exact path="/Tutors/addStudent/:id" tutor={this.state.tutor} component={AddStudentPage} />
                {/* <Route exact path="/books/:id" component={Detail} /> */}
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
    )
  }
}

export default App;
