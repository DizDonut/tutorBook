import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import EditTutor from "../../components/EditTutor";
import "./TutorAccount.css";
import API from "../../utils/API";

class TutorAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutor: []
    };
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
  }

  render(){
    return (
      <div>
        <Nav />
          <Container>
            <Row>
              <Col s={12}>
                <EditTutor />
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
} // end TutorAccountPage class

export default TutorAccount;
