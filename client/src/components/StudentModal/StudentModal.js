import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Carousel, Tag } from "react-materialize";
import {Headline} from '../../components/Headline';
// import Nav from "../../components/Navbar";
// import "./Student.css";
// import API from "../../utils/API";


const display = {
    display: 'block'
  };
const hide = {
    display: 'none'
  };
  
class StudentModal extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
  
      this.state = {
        toggle: false
      }
    }
  
    toggle(event) {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }));
    }
  
    render() {
      var modal = [];
      modal.push(
        <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          {/* <Headline /> */}
<Carousel options={{ fullWidth: true, dataIndicators: true }}>
	<div className='grey'>
           <Row>
             <Col lg={5}>  
            <img className="iconpic" src={ this.props.videoimagelink} />
             </Col>
             <Col lg={7}> 
            <h2 className="white-text modalTitle">Class Video</h2> 
            <h5 className="white-text" >{this.prop.classvideo}</h5>
             </Col>
          </Row> 
	</div>
	<div className='grey'>
           <Row>
             <Col lg={5}>  
            <img className="iconpic" src={ this.props.bdayimagelink} />
             </Col>
             <Col lg={7}> 
             <h2 className="white-text modalTitle">Birthday</h2> 
            <h4 className="birthdate white-text" >{this.props.birthdate}</h4>
             </Col>
          </Row>      
  </div>
	<div className='grey'>
         <Row>
            <Col lg={5}>  
        <img className="iconpic" src={ this.props.fandfimagelink} />
            </Col>
            <Col lg={7}> 
            <h2 className="white-text modalTitle">Family &amp; Friends </h2> 
            <p className="white-text" >{this.props.family}</p>
            </Col>
         </Row>   
	</div>
	<div className='grey'>
        <Row>
            <Col lg={5}>  
        <img className="iconpic" src={ this.props.favsimagelink} />
            </Col>
            <Col lg={7}> 
            <h2 className="white-text modalTitle">Favorites</h2>
        <div className="scroll">
           <p className=" white-text" >{this.props.favs}</p>
        </div>
            </Col>
        </Row>   
	</div>
    <div className='grey'>
        <Row>
            <Col lg={5}>  
        <img className="iconpic" src={ this.props.personalityimagelink} />
            </Col>
            <Col lg={7}> 
            <h2 className="white-text modalTitle">Personality Tags</h2>
        <p className=" white-text" ><Tag>Funny </Tag> <Tag>Studious </Tag><Tag>Smart </Tag> <Tag>Needs TPR </Tag> </p>
            </Col>
        </Row>   
	</div>
    <div className='grey'>
         <Row>
            <Col lg={5}>  
        <img className="iconpic" src={ this.props.chinesenameimagelink} />
            </Col>
            <Col lg={7}> 
            <h2 className="white-text modalTitle">Names &amp; Pronunciation</h2>
        <p className=" white-text" >{this.props.chinesename}</p>
            </Col>
        </Row>   
	</div>
</Carousel >
        </div>
        <div className="modal-footer">
          <a className="btn" onClick={this.toggle}>Close</a>
        </div>
      </div>
      );
      return (
        <div>
          <a className="btn" onClick={this.toggle}>See Student</a>
          {modal}
        </div>
      );
    }
  }


  StudentModal.defaultProps = { birthdate:"January 1",
  chinesename: "BaoBao",
  personality: '',
  favs: "favorite color? food? animal? popular interests? school subjects? ",
  family: "mom & dad....any siblings? or best friends?",
  bdayimagelink: "https://image.flaticon.com/icons/png/512/233/233881.png",
  fandfimagelink: "https://cdn3.iconfinder.com/data/icons/family-5/512/family_parents_kids_children-512.png",
  favsimagelink: "https://1.bp.blogspot.com/-d3LozscUMBY/Vtz13aLffMI/AAAAAAAALp0/Y9pFym980s0/s1600/love.png",
  videoimagelink: "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Video-Camera-icon.png",
  personalityimagelink: "https://openclipart.org/image/2400px/svg_to_png/280959/1496637751.png",
  chinesenameimagelink: "https://lh3.googleusercontent.com/0QGM5wjpjOfE641RxitjeJE0SNN8eTbdKHgwCKSKcYNUsppyjxAFXorVcAzskMrVwQ=h900" }; 


  export default StudentModal;