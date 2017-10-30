import React from "react";
import { Card, CardTitle, Col } from "react-materialize";

const StudentCard = props => {
  return(
    <Col s={3}>
      <Card className="small"
        header={<CardTitle reveal image={props.header} waves="light" />}
        title={props.title}
        reveal={props.reveal}
      >
        <h4><a href="#">Link to Student Page Here</a></h4>
      </Card>
    </Col>
  );
}; //end StudentCard const

export default StudentCard;
