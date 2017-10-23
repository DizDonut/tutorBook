import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Login from "../../components/Login";
import Join_now from "../../components/Join_now";
import Footer from "../../components/Footer";

Const Homepage = () =>
<div> 
    <Hero MediaBox src="../../images/working-it.mp4" caption="A demo media box1" width="1200"/>
    </Hero>
<Container style={{ marginTop: 30 }}>
    <Row>
        <Col size="md-12">
          <h1>Welcome To BAo Bao Book!</h1>
        </Col>
      </Row>
    <Row>
        <Col size="md-12">
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