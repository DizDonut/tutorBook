import React from 'react';
import {Container, Col, Row} from "react-materialize";

export class Headline extends React.Component {


    render() {
        return (
        <div>
          <Row className="headlineRow">
            <Col lg={3}>
            <img  width="250px" length="250px" className="circle" src={this.props.studentPic} alt={this.props.studentPicAlt}></img>
            </Col>
            <Col lg={9}>
              <Row>
              <h1 className="blue-grey-text text-darken-4">{this.props.studentName}, {this.props.age}</h1>
              </Row>
              <Row className="locationrow">
                <Col lg={4}>
                 <img width="40px" length="40px" src="http://www.freeiconspng.com/uploads/red-location-icon-1.png" className="locationicon"></img>
                </Col>
                <Col lg={8}>
              <h4 className="locationtext blue-grey-text text-darken-4">{this.props.location}</h4>
                </Col>
              </Row>
            </Col>
          </Row>  
         </div>
       
        );
      }
      
};  

Headline.defaultProps = { studentName: 'BaoBao',
                           age: 11,
                           location: 'Beijing',
                           studentID: 1234567, 
                           studentPic: "http://via.placeholder.com/250x250",
                           studentPicAlt: "student picture"} ;