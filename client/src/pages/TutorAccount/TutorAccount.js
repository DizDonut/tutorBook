import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import EditTutor from "../../components/EditTutor";
import "./TutorAccount.css";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

class TutorAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutor: []
    };
    this._tutorProfileUpdate = this._tutorProfileUpdate.bind(this)
  }

  componentDidMount() {
    const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
      API.getTutor(query)
        .then(res => {
          this.setState({
            tutor: res.data
          })
        })
    }
    else{
      this.setState({
        redirectTo: "/"
      });
    }
  }
_tutorProfileUpdate(profile) {
  // API CALL HERE/
  const id = this.state.tutor._id;
  API.updateTutor({id,profile}).then((res, err) => {
    if (res.data.error) {
      console.log(res.data.error)
    }
    this.setState({
      loggedIn: res.data.loggedIn,
      tutor: res.data,
      redirectTo: "/Tutors"
    });
  })
  //RES AND REDIRECT HAPPENS HERE
}
  render(){
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
    return (
      <div>
        <Nav />
          <Container>
            <Row>
              <Col s={12}>
              <EditTutor _tutorProfileUpdate={this._tutorProfileUpdate} tutor={this.state.tutor} />
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
  }
} // end TutorAccountPage class

export default TutorAccount;
