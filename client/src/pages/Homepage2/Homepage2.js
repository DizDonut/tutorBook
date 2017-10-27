import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar";
import Login from "../../components/Login";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
import "./homepage.css";
import { Card, CardTitle, Container, Row, Col } from "react-materialize";


class Homepage2 extends Component {

  render(){
    return (
      <div>
        <Nav />

       <Container>
    
         <Card className="large red lighten-5"
          header={<CardTitle image="../../../Images/homepage 2.jpg" ><h2>Welcome To Bao Bao Book!</h2> </CardTitle>}
          >
          <p>Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant, leo ut quam condimentum mollis, augue enim ultrices,Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant, leo ut quam condimentum mollis, augue enim.Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant, leo ut quam condimentum mollis, augue enim ultrices,Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant </p>
         </Card>

          <Row>
            <Col s={12}>
             
              <Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*/}
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
      </div>
    );
  };
};


export default Homepage2;
