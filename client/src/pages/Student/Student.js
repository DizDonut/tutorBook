import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-materialize";

class Student extends Component {

render(){
    return(
    <div>
        <Container>
            <Row>
                <Col>
                <img src={"http://via.placeholder.com/500x500"} alt={"Student Pic"} />
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <h1>NAME</h1>
                    <h2>AGE</h2>
                    <h2>CITY</h2>
                </Col>
                <Col s={6}>
                    <h2>Description:</h2>
                    {/* Student description */}
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <img src={"http://via.placeholder.com/200x200"} alt={"Video Pic"} />
                    <h2>Class Video:</h2>
                    <Link to={"#"}>Click Here</Link>
                </Col >
                <Col s={6}>
                    <img src={"http://via.placeholder.com/200x200"} alt={"Family/Friends Pic"}/>
                    <h2>Family and Friends:</h2>
                        {/* Family description */}
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                <img src={"http://via.placeholder.com/200x200"} alt={"Likes Pic"} />
                    <h2>Likes/Favorites:</h2>
                        {/* Favorites description */}
                </Col>
                <Col s={6}>
                <img src={"http://via.placeholder.com/200x200"} alt={"Birthday Pic"} />
                    <h2>Birthday:</h2>
                        {/* Birthday */}
                </Col>
            </Row>

        </Container>
    </div>
 )
}

} // end class
export default Student;