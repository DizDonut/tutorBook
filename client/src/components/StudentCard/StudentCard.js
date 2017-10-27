import React, { Component } from "react";
import { Card, CardTitle, Col, Container, Row } from "react-materialize";
import Nav from "../../components/Navbar";

const StudentCard = props => {
  <Row>
    <Col s={3}>
      <Card className="small">
          <CardTitle reveal image={props} waves="light" />
            {props.children}
      </Card>
    </Col>
  </Row>

} //end StudentCard const

export default StudentCard;
