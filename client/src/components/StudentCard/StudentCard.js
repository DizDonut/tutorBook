import React, { Component } from "react";
import { Card, CardTitle, Col, Container, Row } from "react-materialize";
import Nav from "../../components/Navbar";

const StudentCard = props => {
  return(
    <Row>
      <Col s={3}>
        <Card className="small">
            <CardTitle reveal image={props.reveal} waves="light" />
              {props.header}
              {props.title}
        </Card>
      </Col>
    </Row>
  );
}; //end StudentCard const

export default StudentCard;
