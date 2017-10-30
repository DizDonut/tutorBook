import React, { Component } from "react";
import API from "../../utils/API.js";
import { Button, Card, CardTitle, Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";
import TutorCard from "../../components/Tutor";
import "./Tutors.css";

class Tutors extends Component {

state = {
  studentResults: [{
    name: "Mike Bechtel",
    picture: "Test Picture",
    description: "I like turtles",
  }],
  teacherName:"",
  teacherPic:"",
  contract:"",
  totalStudents:""
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
countStudents = () =>{
  let len = this.state.studentResults.length;
  for (let i = 0; i < len; i++) {
    this.state.totalStudents++;
  }
  return this.state.totalStudents;
}

  render(){
    return(
      <div>
      <Nav />
        <Container>
          <Row>
            <Col s={12}>
              <Row>
                <Col s={6}>
                  <Card className="medium"
                    header={<CardTitle image="../../../Images/background.jpg">Tutor Name Goes Here</CardTitle>}
                    >

                  </Card>
                </Col>
                <Container className="button-container">
                  <Col s={6}>
                    <ul>
                      <li>
                        <Button large className="blue" waves="light">
                          Add a New Student
                        </Button>
                        <div onClick={this.countStudents()}></div>
                      </li>
                    </ul>
                  </Col>
                </Container>
              </Row>
            </Col>
          </Row>
          <hr/>
          <Row>
          {this.state.studentResults.map(result =>(
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
