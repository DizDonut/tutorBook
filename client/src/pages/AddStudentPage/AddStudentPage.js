import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import AddStudent from "../../components/AddStudent";
// import Footer from "../../components/Footer";
import "./AddStudentPage.css";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'


class AddStudentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutor: [],
      student: [],
      studentId: null,
      redirectTo: ""
    };
    //bind your api function here (see register and login components for an example)
    this._tutorStudentProfileUpdate = this._tutorStudentProfileUpdate.bind(this)
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
    else{
      this.setState({
        redirectTo: "/"
      });
    }
  }

  _tutorStudentProfileUpdate(profile) {
    // API CALL HERE/
    const tutorId = this.state.tutor._id;
//    alert(id);
//    alert(studentProfile.firstName);

    API.saveStudent({tutorId,profile}).then((res, err) => {
      if (res.data.error) {
        console.log(res.data.error)
      }
      console.log(res.data)
      this.setState({
        tutor: res.data,
        redirectTo: "/Tutors"
      });
    })
    //RES AND REDIRECT HAPPENS HERE
  }

 

  //insert a props function here for API to update student data, then pass this function into your AddStudent Component

  render(){ 
      const data = this.props.history.location.pathname
      const dataArr = data.split("/");
      const temp = dataArr[dataArr.length - 1];
      const studentMatch = temp !== "addStudent" ? temp : null
      console.log(studentMatch);
      // this._editStudent(studentId) 
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <Nav />
            <Container>
              <Row>
                <Col s={12}>
                {this.state.tutor && this.state.tutor.students &&
                  <AddStudent 
                  _tutorStudentProfileUpdate={this._tutorStudentProfileUpdate} 
                  studentData={this.state.tutor.students.filter(match => {
                    return match._id === studentMatch ? match : null
                  })}    
                  tutor={this.state.tutor} 
                  studentMatch={studentMatch}/>
                }
                  </Col>
              </Row>
            </Container>
            {/* <Footer /> */}
        </div>
      )
    }
  }
} // end AddStudent class

export default AddStudentPage;

// window.location.href, grab the id, 
// const url = Window.location.href
// url.split("/");
// const studentId = url[url.length-1];
// query the tutor db for a matching student, and 
// set the state of the page with that data, pass that data into placeholders
