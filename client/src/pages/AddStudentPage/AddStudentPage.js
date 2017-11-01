import React, { Component } from "react";
import API from "../../utils/API.js";
import { Button, Card, CardTitle, Col, Row, Container } from "react-materialize";
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
