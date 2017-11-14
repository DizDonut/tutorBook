import React, { Component } from "react";
import { Col, Row, Container, Input } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";
import DeleteBtn from "../../components/DeleteBtn";
import TutorCard from "../../components/Tutor";
import "./Tutors.css";
import API from "../../utils/API";

class Tutors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contract: "",
      totalStudents: 0,
      teacherKey: "",
      tutor: {},
      loggedIn: false,

    };
    this._tutorEventUpdate = this._tutorEventUpdate.bind(this)
  }

  _tutorEventUpdate () {
    //alert("trying to update events");
    this.componentDidMount();
  }

  componentDidMount() {
    const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
      API.getTutor(query)
        .then((res, err) => {
          if (err) {
            console.log(err)
          }
          //Parse events before trying to display
          res.data.events.forEach(function(event){
            event.start = new Date(event.start.replace(/"/g, ""));
            event.end = new Date(event.end.replace(/"/g, ""));
          })
          this.setState({
            totalStudents: res.data.students.length,
            tutor: res.data,
            loggedIn: true
          })
        })
    }
    else{
      this.setState({
        redirectTo: "/"
      });
    }
  }

  deleteStudent = id => {
    API.deleteStudent(id)
      .then(res => {
        window.location = "/Tutors";
      })
      .catch(err => console.log(err));
  };

  // counts the number of students the tutor has taught/input
  countStudents = () => {
    let count = 0;
    let len = this.state.tutor.students.length;
    for (let i = 0; i < len; i++) {
      count++;
    }
    this.setState({totalStudents: count})
    return `Total Students: ${this.state.totalStudents}`;
  }

  render(){
    return(
      <div>
        <Nav/>
        <div>
        <Container>
          <Row>
            <Col s={12}>
              {this.state.tutor && this.state.tutor.students && (
              <TutorCard _tutorEventUpdate={this._tutorEventUpdate}
                header={this.state.tutor.tutorPic}
                title={this.state.tutor.username}
                count={this.state.totalStudents}
                contract={this.state.tutor.contract}
                events={this.state.tutor.events}>
              </TutorCard>)}
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col s={12} m={12} l={12}>
              <Input value="Student search bar"/>
            </Col>
          </Row>
          <Row>

          {this.state.tutor && this.state.tutor.students && this.state.tutor.students.map(result => (
            <div>
            <StudentCard
              key={result._id}
              link={result._id}
              header={result.picture}
              reveal={result.notes}
              title={result.firstName}
              notes={result.notes}
              likes={result.likes}
              family={result.family}
              birthday={result.birthday}
              age={result.age}
              location={result.location}>
            </StudentCard>
            <DeleteBtn onClick={() => this.deleteStudent(result._id)} />
           </div>
          ))}

          </Row>
        </Container>
        </div>
      </div>
    );
  };
}; // end class

export default Tutors;
