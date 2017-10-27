import React, { Component } from "react";
import API from "../../utils/API.js";
import { Card, CardTitle, Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";

class Tutors extends Component {

state = {
  studentResults: [{
    name: "Mike Bechtel",
    picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjb0IiMoJHXAhWG0FQKHesKAZgQjRwIBw&url=http%3A%2F%2Fwww.sepeb.com%2Fcrazy-picture.html&psig=AOvVaw0AWAtfG17cPqlAulOsFBwg&ust=1509209083509102",
    description: "I like turtles",
  }],
  teacherName:"",
  teacherPic:"",
  contract:"",
  totalStudents:"",
};

//
// componentDidMount(){
//   this.loadStudents();
// };
//
// loadStudents = () => {
//   API.getStudents()
//     .then(res =>
//       this.setState({ studentResults: res.data })
//     )
//     .catch(err => console.log(err));
// };

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
                    Info about the teacher
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr/>
          {this.state.studentResults.map(result =>(
            <StudentCard
              header={this.state.studentResults.picture}
              title={this.state.studentResults.name}
              reveal={this.state.studentResults.description}
            />
          ))}

        </Container>
      </div>
    );
  };
}; // end class

export default Tutors;
