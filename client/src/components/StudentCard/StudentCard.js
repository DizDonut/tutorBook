import React from "react";
import { Card, CardTitle, Col } from "react-materialize";
import "./StudentCard.css";
import StudentModal from "../StudentModal";

class StudentCard extends React.Component {

  render() {
    return(
      <Col s={4}>
        <Card
          header={<CardTitle reveal image={this.props.header} />}
          title={this.props.title}
          reveal={this.props.reveal}>
          {<StudentModal />}
          <p><a className="student-links" href="#">Edit Student</a></p>
        </Card>
      </Col>
    );
  }
}; //end StudentCard const

export default StudentCard;
