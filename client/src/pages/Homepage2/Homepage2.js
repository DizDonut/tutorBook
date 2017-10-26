import React, { Component } from "react";
import Nav from "../../components/Navbar";
import Login from "../../components/Login";
import Join from "../../components/Join";
import { Card, CardTitle, Container, Row, Col } from "react-materialize";


class Homepage2 extends Component {

  render(){
    return (
      <div>
        <Nav />

       <Container>


         <Card className="large"
          header={<CardTitle image="../../../Images/blackboard-2721887_1280.jpg">Welcome To Bao Bao Book!</CardTitle>}
          >
         </Card>

          <Row>
            <Col s={12}>
              <p>Filler Text</p>
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
