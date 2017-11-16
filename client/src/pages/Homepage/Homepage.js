import React, { Component } from "react";
import Login from "../../components/Login";
import Join from "../../components/Join";
// import Footer from "../../components/Footer";
// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';
import { Card, CardTitle, CardPanel, Container, Col, Row,Footer } from "react-materialize";
import API from "../../utils/API";

import { Redirect } from 'react-router-dom'
import "./Homepage.css";
import { Alert } from 'react-bootstrap';
import logoPic from "./logo.png"

// const url = require("/Images/tutorbg5.png")

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor: null,
      redirectTo: "",
      register: "",
      bstyle: "",
      error:""
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    this._login = this._login.bind(this)
    this._join = this._join.bind(this)
    // this.redirectFunc = this.redirectFunc.bind(this)
  }


//When this component mounts grab the logged in status from local storage,
//if logged in counter is there, and if it's less than expires at, hide the login and register divs and provide a new button taking them directly in to the app. 

  _login(username, password) {
    API.login({ username, password }).then((res,err) => {
      if (res.data.error) {
        console.log(res.data.error)
      }
      if (res.data.loggedIn) {
        var tutor = {
          username: res.data.user.username,
          id: res.data.user._id,
          loggedIn: Date.now(),
          expiresAt: Date.now() + 1200000
        }
        localStorage.setItem("tutor", JSON.stringify(tutor))
        // update the state
        const data = localStorage.getItem("tutor");
        if (data) {
          this.setState({
            loggedIn: res.data.loggedIn,
            tutor: res.data.user,
            redirectTo: res.data.user.contract ? "Tutors" : "Tutors/account"
          });
        }
      } 
    })
  }

  _join(email,username, password) {
    API.register({
      email,
      username,
      password
    }).then((res, err) => {
      if (res.data.error) {
        this.setState({
          error: res.data.error,
          register: res.data.error,
          bstyle: "warning"
          // redirectTo: "/"
        });
        // alert(err)
      } else {
        // alert("New User Added!  Please login with your new credentials.")
        this.setState({
          register: "You're registered!",
          bstyle:"success"
          // redirectTo: "/"
        });
      }
    })
  }

  render(){
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="homepage">
          <Container>
            <Row>
              <Col l={3} m={3} s={3} ></Col>
              <Col l={6} m={6} s={6} >
                <Card className="z-depth-0" 
                    header={<CardTitle image={logoPic} > </CardTitle>}>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <div className="row center">
                  {/* <Row>
                    <div className="centered"> </div>
                  </Row> */}
                  <Col s={12} m={12} l={6}>
                    <Login _login={this._login} />
                  </Col>
                  <Col s={12} m={12} l={6}>
                    {!this.state.register && <Join msg={this.state.register} _join={this._join} />}
                    {this.state.register && this.state.error && <Join msg={this.state.register} _join={this._join} />}
                    {this.state.register && this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                    {this.state.register && !this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                  </Col>
                </div>
              </Col>
            </Row> 
          </Container>
          <Footer
            copyrights="copyright 2017 Super Group">
            <Row>
              {/* <Col l={3} m={3} s={3}></Col> */}
              <Col l={12} m={12} s={12}>
                <a class="github-button" href="https://github.com/kaibrown" aria-label="Follow @kaibrown on GitHub">Follow @kaibrown</a>
                <a class="github-button" href="https://github.com/tbphokie" aria-label="Follow @tbphokie on GitHub">Follow @tbphokie</a>
                <a class="github-button" href="https://github.com/jbcurrie" aria-label="Follow @jbcurrie on GitHub">Follow @jbcurrie</a>
                <a class="github-button" href="https://github.com/AgesilausDrako" aria-label="Follow @AgesilausDrako on GitHub">Follow @AgesilausDrako</a>
                <a class="github-button" href="https://github.com/RubyDease" aria-label="Follow @RubyDease on GitHub">Follow @RubyDease</a>
                <a class="github-button" href="https://github.com/DizDonut" aria-label="Follow @DizDonut on GitHub">Follow @DizDonut</a>
              </Col>
            </Row>
          </Footer>
        </div>
      )
    }
  }
}
export default Homepage;
