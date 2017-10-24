import React, { Component } from "react";
import Nav from "../../components/Navbar";
import Login from "../../components/Login";
import Join_now from "../../components/Join_now";
import { Card, CardTitle, Container, Row, Col } from "react-materialize";
// import { Col, Container, Row } from "../../components/Grid"


const Homepage = () =>
<div>

 <Container>
   <Card className="large"
      header={<CardTitle image="../../../Images/Working-it.mp4.url"><h1>Welcome To Bao Bao Book!</h1></CardTitle>}
      >
   </Card>

    <Row>
      <Col s={12}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
          et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
          gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
          mi sollicitudin turpis semper, et interdum risus lobortis.
        </p>
        <div class="row center">
          <a href="#" id="download-button" class="btn-large waves-effect waves-light blue-grey darken-3">Login</a>
          <a href="#" id="download-button" class="btn-large waves-effect waves-light transparent grey-text">Join now</a>
        </div>
      </Col>
    </Row>
 </Container>

</div>;

export default Homepage;
