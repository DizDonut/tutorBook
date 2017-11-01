import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <h5>Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant, leo ut quam condimentum mollis, augue enim ultrices,Lorem ipsum    </h5>
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
