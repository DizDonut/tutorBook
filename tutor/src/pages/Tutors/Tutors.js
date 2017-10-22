import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class Tutors extends Component {

  render(){
    return(
      <Container fluid>
        <Row>
          <Col size="md-6">
            This is a column
          </Col>
        </Row>
      </Container>
    )
  }

} // end class

export default Tutors;
