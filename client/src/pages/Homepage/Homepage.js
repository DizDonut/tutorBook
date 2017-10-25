import React, { Component } from "react";
import Nav from "../../components/Navbar";
import Login from "../../components/Login";
import Join from "../../components/Join";
import { Button, Card, CardTitle, Container, Input, Modal, Row, Col } from "react-materialize";


const Homepage = () =>
<div>
 <img src="../../../Images/Working-it.mp4.url" />
 <Container>

   <Card className="large"
      header={<CardTitle><h1>Welcome To Bao Bao Book!</h1></CardTitle>}
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

</div>;

export default Homepage;
