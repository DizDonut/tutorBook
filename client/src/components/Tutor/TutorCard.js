import React from "react";
import { Card, CardTitle, Col, Row } from "react-materialize";

const TutorCard = props => {
  <Row>
    <Col s={3}>
      <Card className="small">
          <CardTitle reveal image={props} waves="light" />
            {props.children}
      </Card>
    </Col>
  </Row>

} //end StudentCard const

export default TutorCard;
