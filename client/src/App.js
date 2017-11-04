import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom"; //
import Homepage from "./pages/Homepage";
import Tutors from "./pages/Tutors";
import Student from "./pages/Student";
import AddStudentPage from "./pages/AddStudentPage";
import TutorAccount from "./pages/TutorAccount";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import API from "./utils/API";

class App extends Component {
  // const App = () =>
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor:null,
      redirectTo: ""
    }
    // this._logout = this._logout.bind(this)
    // this._login = this._login.bind(this)
  }

  componentDidMount() {
    // axios.get('/auth/user').then(response => {
    //   console.log(response.data)
    //   if (!!response.data.user) {
    //     console.log('THERE IS A USER')
    //     this.setState({
    //       loggedIn: true,
    //       user: response.data.user
    //     })
    //   } else {
    //     this.setState({
    //       loggedIn: false,
    //       user: null
    //     })
    //   }
    // })
  }
  

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

  render() {
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div>
          <MuiThemeProvider>
            <div>
              <Switch>}
                <Route exact path="/" component={Homepage} /> {/* _logout={this._logout} loggedIn={this.state.loggedIn} tutor={this.state.tutor} */}
                <Route exact path="/Tutors" component={Tutors} />
                <Route exact path="/Student" component={Student} />
                <Route exact path="/Tutors/account" component={TutorAccount} />
                <Route exact path="/Tutors/addStudent" component={AddStudentPage} />
                {/* <Route exact path="/books/:id" component={Detail} /> */}
              </Switch>
            </div>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
