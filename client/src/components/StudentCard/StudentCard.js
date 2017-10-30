import React from "react";
import { Card, CardTitle, Col } from "react-materialize";

class StudentCard extends React.Component {
  render() {
    return(
      <Col s={4}>
        <Card className="small"
          header={<CardTitle reveal image={this.props.header} waves="light" />}
          title={this.props.title}
          reveal={this.props.reveal}
        >
          <h4><a href="#">Link to Student Page Here</a></h4>
        </Card>
      </Col>
    );
  }
}; //end StudentCard const

export default StudentCard;
