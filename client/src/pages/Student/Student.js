import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import "./Student.css";

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
         </Container>
         <Container>
            <Row>
           <Col l={2}>
                   <img className="iconpic" src={"http://www.iconarchive.com/download/i99519/webalys/kameleon.pics/Video-Camera-2.ico"} alt={"Video Pic"} />
                </Col> 
                <Col l={4}>
                    <h2>Class Video:</h2>
                    <Link to={this.state.classVideo}>Click Here</Link>

                </Col >
                <Col l={2}>
                    <img className="iconpic" src={"https://cdn3.iconfinder.com/data/icons/family-5/512/family_parents_kids_children-512.png"} alt={"Family/Friends Pic"}/>
                </Col>
                <Col l={4}>    
                    <h2 className="fandf">Family and Friends:</h2>
                        <h3>{this.state.friendFamDescription}</h3>
                </Col>
            </Row>
            <Row>
                <Col l={2}>
                <img className="iconpic" src={"https://1.bp.blogspot.com/-d3LozscUMBY/Vtz13aLffMI/AAAAAAAALp0/Y9pFym980s0/s1600/love.png"} alt={"Likes Pic"} />
                </Col>
                <Col l={4}>
                    <h2>Likes/Favorites:</h2>
                        <h3>{this.state.favorites}</h3>
                </Col>
                <Col l={2}>
                <img className="iconpic" src={"https://image.flaticon.com/icons/png/512/187/187450.png"} alt={"Birthday Pic"} />
                </Col>
                <Col l={4}>
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
