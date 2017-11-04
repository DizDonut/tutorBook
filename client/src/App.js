import React, {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom"; //
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";
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
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }

//set localstorage when they register
  //at app, get localStorage var
  //at login (username === localstorage("tutor") => api login)
  //
  // _logout(event) {
  //   API.logout().then(res => {
  //     console.log(res)
  //     if (res.status === 200) {
  //       // update the state
  //       this.setState({
  //         loggedIn: false,
  //         user: null
  //       })
  //     }
  //   })
  //   // localStorage.removeItem("Tutor");

  // }

  // _login(username, password) {
  //   API.login({username,password}).then((res,err) => {
  //     if (err) {
  //       console.log(err)
  //     };
  //     console.log(res)
  //     if (res.status === 200) {
  //       // update the state
  //       this.setState({
  //         loggedIn: true,
  //         user: res.data,
  //         redirectTo: "/Tutors"
  //       })
  //     }
  //   })
  // }
  componentDidMount() {
    var getTutor = localStorage.getItem("id");//current tutor's id
    this.setState({
      id: getTutor
    })
    // API.getTutor(getTutor).then((res, err) => {
    //  this.state.tutor=  res.data
    // alert(data)
    // })
    // sessionStorage.setItem('key', 'value');

  }

  render() {
    // if (!!this.state.redirectTo) {
    //   return <Redirect to={{ pathname: this.state.redirectTo }} />
    // }
    return (
        <Router>
          <MuiThemeProvider>
            <div>
              <Switch>
                {/* _logout={this._logout} loggedIn={this.state.loggedIn} tutor={this.state.tutor} */}
                <Route exact path="/" component={Homepage} />
                <Route exact path="/Tutors" component={Tutors} />
                <Route exact path="/Student" component={Student} />
                <Route exact path="/Tutors/account" component={TutorAccount} />
                <Route exact path="/Tutors/addStudent" component={AddStudentPage} />
                {/* <Route exact path="/books/:id" component={Detail} /> */}
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router> 
    ) 
  }
}

export default App;
