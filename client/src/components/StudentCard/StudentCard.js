import React from "react";
import { Card, CardTitle, Col,Tag } from "react-materialize";
import API from "../../utils/API";
import "./StudentCard.css";
import StudentModal from "../StudentModal";

class StudentCard extends React.Component {
  
  render() {
    return(
      <Col s={4}>
        <Card
          header={<CardTitle reveal image={'http://api.adorable.io/avatar/200/' + this.props.title} />}
          title={this.props.title}
          reveal={this.props.reveal}>
          <StudentModal
            notes={this.props.notes}
            likes={this.props.likes[0]}
            family={this.props.family}
            location={this.props.location}
            age={this.props.age}
            birthday={this.props.birthday}
          />
          <p><a className="student-links" href={'/Tutors/addStudent/' + this.props.link}>Edit Student</a></p>
          {/* <p><a className="student-links" href={'/students/deleteStudent/' + this.props.link}>Delete Student</a></p> */}
        </Card>
      </Col>
    );
  }
}; //end StudentCard const

export default StudentCard;
{/* http://api.adorable.io/avatars/200/ - larger library at this API, but they're even more rwierd*/ }
{/* we should map out the description array, and change the input to add tags for each new descriptor */ }
