import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";

class Student extends Component {

state = {
    studentPic:"https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-CUSA05855_00-AV00000000000010/1508519815000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100",
    studentName:"Clay",
    studentAge:"29",
    studentDescription: "Awesomeness! A joy to teach. Taught me everything I know!",
    studentCity:"Cherryville",
    classVideo:"",
    friendFamDescription:"One brother. All kinds of friends.",
    favorites: "Movies, Coding, Coffee, lots of Coffee, all the Coffee",
    birthday:"January 30"
};

render(){
    return(
    <div>
        <Nav />
        <Container>
            <Row>
                <Col>
                <img src={this.state.studentPic} alt={"Student Pic"} />
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <h1>{this.state.studentName}</h1>
                    <h3>{this.state.studentAge}</h3>
                    <h3>{this.state.studentCity}</h3>
                </Col>
                <Col s={6}>
                    <h2>Description:</h2>
                    <h3>{this.state.studentDescription}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <img src={"https://blog.majestic.com/wp-content/uploads/2010/10/Video-Icon-crop.png"} alt={"Video Pic"} />
                    <h2>Class Video:</h2>
                    <Link to={this.state.classVideo}>Click Here</Link>
                </Col >
                <Col s={6}>
                    <img src={"http://riverpodcast.com/wp-content/uploads/2017/08/Family-Silhouette-3.jpg"} alt={"Family/Friends Pic"}/>
                    <h2>Family and Friends:</h2>
                        <h3>{this.state.friendFamDescription}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                <img src={"https://s7d2.scene7.com/is/image/aeo/favorites_title"} alt={"Likes Pic"} />
                    <h2>Likes/Favorites:</h2>
                        <h3>{this.state.favorites}</h3>
                </Col>
                <Col s={6}>
                <img src={"http://minimotives.com/wp-content/uploads/2016/09/birthdays.jpg"} alt={"Birthday Pic"} />
                    <h2>Birthday:</h2>
                        <h3>{this.state.birthday}</h3>
                </Col>
            </Row>
        </Container>
    </div>
 )
}

} // end class
export default Student;