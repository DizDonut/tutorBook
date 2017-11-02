import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import AddStudent from "../../components/AddStudent";
import Footer from "../../components/Footer";
import "./AddStudentPage.css";

class AddStudentPage extends Component {



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
