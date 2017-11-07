import React, { Component } from "react";
import Login from "../../components/Login";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
import { Card, CardTitle, Container, Col, Row } from "react-materialize";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor: null,
      redirectTo: "",
      error:""
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    this._login = this._login.bind(this)
  }

  // handleInputChange(e) {
  //   this.setState({ tutor: e.target.value });
  // }



//STATUS: needss error handler if not logged in, should clear form and send an alert. Purpose: login user, and create a local storage session; use the local storage to authenticate each query to the db with the user's id key. to do: authenticate all api routes that read, update, delete from mongodb
  _login(username, password) {
    API.login({ username, password }).then((res,err) => {
      if (res.data.error) {
        console.log(res.data.erro)
      }
      if (res.data.loggedIn) {
        var tutor = {
          username: res.data.username,
          id: res.data.id,
          loggedIn: Date.now(),
          expiresAt: Date.now() + 1200000
        }
        localStorage.setItem("tutor", JSON.stringify(tutor))
        // update the state
        const data = localStorage.getItem("tutor");
        if (data) {
          this.setState({
            loggedIn: res.data.loggedIn,
            tutor: res.data,
            redirectTo: "/Tutors"
          });
        }
      } 
    })
  }


  render(){
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
      <div>
      <Container>
          <Card className="large red lighten-5"
        header={<CardTitle image={"Images/homepage.jpg"}><h1>Welcome to Bao Bao Book!</h1> </CardTitle>}
       >
       <h5> Welcome to Bao Bao Book the Learning management system</h5>
        <p>Experience the uniqueness of our Learning Management system where technology is no more an exclusive tool to embrace education
        Tutors can keep track of student progress, access course calendars, connect 
        with all resources within the network, access e-resources related to lessons and
        a login to the Learning Management System by entering username and password</p>
       </Card>
          <Row>
            <Col s={12}>
              {/*<Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*//*}*/}
              <div className="row center">
                <Row>
                  <Col s={6}>
                      <Login _login={this._login} />
                  </Col>
                  <Col s={6}>
                    <Join />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
      </Container>
      <Footer />
      </div>
    );
  }
};
};

export default Homepage;
