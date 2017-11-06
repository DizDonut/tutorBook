import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import AddStudent from "../../components/AddStudent";
import Footer from "../../components/Footer";
import "./AddStudentPage.css";
import API from "../../utils/API";

class AddStudentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutor: []
    };
    //bind your api function here (see register and login components for an example)
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

  //insert a props function here for API to update student data, then pass this function into your AddStudent Component

  render(){
    return (
      <div>
        <Nav />
          <Container>
            <Row>
              <Col s={12}>
                <AddStudent />
              </Col>
            </Row>
          </Container>
          <Footer />
      </div>
    )
  }
} // end AddStudent class

export default AddStudentPage;
