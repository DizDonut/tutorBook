import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";
import TutorCard from "../../components/Tutor";
import "./Tutors.css";

class Tutors extends Component {

state = {
  studentResults: [
    {
      name: "Mike Bechtel",
      picture: "Images/downloadTest.jpg",
      description: "I like turtles",
    },
    {
      name: "Mike Bechtel",
      picture: "Images/downloadTest.jpg",
      description: "I like turtles",
    },
    {
      name: "Mike Bechtel",
      picture: "Images/downloadTest.jpg",
      description: "I like turtles",
    },
    {
      name: "Mike Bechtel",
      picture: "Images/downloadTest.jpg",
      description: "I like turtles",
    }
  ],
  teacherName:"Mike Bechtel",
  teacherPic:"Images/downloadTest.jpg",
  contract:"01/01/2017 - 12/31/2017",
  totalStudents:0,
  teacherKey:""
};



// componentDidMount(){
//   this.loadStudents();
// };

// loadStudents = () => {
//   API.getStudents()
//     .then(res =>
//       this.setState({ studentResults: res.data })
//     )
//     .catch(err => console.log(err));
// };

//counts the number of students the tutor has taught/input
countStudents = () => {
  let len = this.state.studentResults.length;
  for (let i = 0; i < len; i++) {
    this.state.totalStudents++;
  }
  return `Total Students: ${this.state.totalStudents}`;
}

  render(){
    return(
      <div>
      <Nav />
        <Container>
          <Row>
            <Col s={12}>
              <TutorCard
                header={this.state.teacherPic}
                title={this.state.teacherName}
                content={this.countStudents()}
                contract={this.state.contract}>
              </TutorCard>
            </Col>
          </Row>

          <hr/>

          <Row>

          {this.state.studentResults.map(result => (
            <StudentCard
              header={result.picture}
              reveal={result.description}
              title={result.name}
            />
          ))}

          </Row>
        </Container>
      </div>
    );
  };
}; // end class

export default Tutors;
