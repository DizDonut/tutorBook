import React, { Component } from "react";
import Login from "../../components/Login";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
import { Card, CardTitle, Container, Col, Row } from "react-materialize";


class Homepage extends Component {

  render(){
    return (
      <div>

     <Container>

       <Card className="large light-blue lighten-5"
        header={<CardTitle image={"Images/homepage.jpg"}><h1>Welcome to Bao Bao Book!</h1> </CardTitle>}
       >
       <h5> Welcome to Bao Bao Book the Learning management system</h5>
        <p>Experience the uniqueness of our Learning Management system where technology is no more an exclusive tool to embrace education
        Tutors can keep track of student progress, access course calendars, connect 
        with all resources within the network, access e-resources related to lessons and
        a login to the Learning Management System by entering username and password</p>
       </Card>

        <Row>
          <Col s={12}>

            {/*<Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*//*}*/}
            <div className="row center">
              <Row>
                <Col s={6}>
                  <Login />
                </Col>
                <Col s={6}>
                  <Join />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
     </Container>
     <Footer />
    </div>
  );
};
};


export default Homepage;
