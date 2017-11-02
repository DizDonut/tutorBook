import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import EditTutor from "../../components/EditTutor";
import "./TutorAccount.css";

class TutorAccount extends Component {



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
