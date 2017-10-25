import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";

class Tutors extends Component {

  render(){
    return(
      <Container>
        <Row>
          <Col s={6}>
            This is a column
          </Col>
        </Row>
      </Container>
    )
  }

} // end class

export default Tutors;
