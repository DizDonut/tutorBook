import React, { Component } from "react";
import { Button, Container, Input, Row } from "react-materialize";
import "materialize-css";
//import API from "../../utils/API";
import "./EditTutor.css";

class EditTutor extends Component {
constructor (props) {
  super(props)
  this.state = {
    username: "",
    password: "",
    email: "",
    tutorPic: "",
    contract: "",
    totalStudents: ""
  };
  this.handleInputChange = this.handleInputChange.bind(this)
}


//handleinputchange
handleInputChange = event => {
	const{name,value} = event.target;
	this.setState({
		[name]:value
	})
}

//submit form
handleFormSubmit = event => {
  event.preventDefault() 
  const profile = {
    tutorPic: this.state.tutorPic,
    contract: this.state.contract
  }
  this.props._tutorProfileUpdate(profile)
}

// handleFormSubmit = event => {
//   //_tutorProfileUpdate()
//   event.preventDefault();
//   if (this.state.username && this.state.password) {
//     console.log("editTutor");
//     API.updateTutor({
//       username: this.state.username,
//       password: this.state.password,
//       email: this.state.email,
//       tutorPic: this.state.tutorPic,
//       contract: this.state.contract,
//       totalStudents: this.state.totalStudents
//     })
//       // .then(res => 
//       //   {
//       //       window.location= "/Tutors/:id";
//       //   })
//       // .catch(err => console.log(err));
//   }
// };

render(){
    return (
      <div>
        <Container>
        <div className="header">Edit My Account</div>
              <form>
                <Row>
              <Input name="username" onChange={this.handleInputChange} value={this.props.tutor.username} defaultValue={this.props.tutor.username} placeholder="" s={6} label="Username" disabled/>
              <Input name="email" onChange={this.handleInputChange} value={this.props.tutor.email} defaultValue={this.props.tutor.email} placeholder="" s={12} label="Email" disabled/>
                  <Input name="tutorPic" onChange={this.handleInputChange} value={this.state.tutorPic} placeholder={this.props.tutor.tutorPic} s={12} label="Picture" />
                  <Input name="contract" onChange={this.handleInputChange} value={this.state.contract} placeholder={this.props.tutor.contract} s={12} label="Contract" />
                  <Input name="totalStudents" onChange={this.handleInputChange} value={this.state.totalStudents} placeholder="" s={12} label="Total Students" disabled/>
                </Row>  
                <Row>
                  <Button waves="light" onClick={this.handleFormSubmit}>Submit</Button>
                </Row>
          </form>
        </Container>
      </div>
    )
  }
}

export default EditTutor;
