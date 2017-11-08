import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";
import TutorCard from "../../components/Tutor";
import "./Tutors.css";
import API from "../../utils/API";

class Tutors extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      teacherName: "Mike Bechtel",
      teacherPic: "Images/downloadTest.jpg",
      contract: "01/01/2017 - 12/31/2017",
      totalStudents: 0,
      teacherKey: "",
      tutor: [],
      loggedIn: false
    };
  }



  componentDidMount() {
    const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
      API.getTutor(query)
        .then(res => {
          this.setState({
            tutor: res.data,
            loggedIn: true
          })
        })
    }
  }

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
        <Nav/>
        <Container>
          <Row>
            <Col s={12}>
              <TutorCard
                header={this.state.teacherPic}
                title={this.state.teacherName}
                content={this.countStudents()}
                contract={this.state.contract}
                events={this.state.tutor.events}>
              </TutorCard>
            </Col>
          </Row>

          <hr/>

          <Row>

          {this.state.studentResults.map(result => (
            <div>
            <StudentCard
              header={result.picture}
              reveal={result.description}
              title={result.name}
            />

            <StudentModal

               location={result.location}
               description={result.description}
               classvideo={result.classVideo}
               birthdate={result.birthday}
               family={result.family}
               favs={result.likes}
            />
           </div>
          ))}

          </Row>
        </Container>
      </div>
    );
  };
}; // end class

export default Tutors;
