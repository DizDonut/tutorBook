import React, { Component } from "react";
import { Button, Carousel, Container, Input, Row } from "react-materialize";
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
    images: [
      "/Images/avatars/female/avatar1.png",
      "/Images/avatars/female/avatar2.png",
      "/Images/avatars/female/avatar3.png",
      "/Images/avatars/female/avatar4.png",
      "/Images/avatars/female/avatar5.png",
      "/Images/avatars/female/avatar6.png",
      "/Images/avatars/male/mAvatar1.png",
      "/Images/avatars/male/mAvatar2.png",
      "/Images/avatars/male/mAvatar3.png",
      "/Images/avatars/male/mAvatar4.png",
      "/Images/avatars/male/mAvatar5.png",
      "/Images/avatars/male/mAvatar6.png"
    ],
    image: "",
    tutorPic: null,
    contract: "",
    totalStudents: "",
    myClass: "active",
    toggle: false
  };

  this.handleInputChange = this.handleInputChange.bind(this)
  this.hasActiveClass = this.hasActiveClass.bind(this)
  this.changeImage = this.changeImage.bind(this)
}

//on button click assign the img src for the active class to the state, fire an alert
hasActiveClass = (e) => {
  e.preventDefault();
  const elem = document.getElementsByClassName("carousel-item")
  if (elem) {
    let activeElem = document.getElementsByClassName("carousel-item active")
    let activeElemSrc = activeElem["0"].firstChild.attributes["0"].nodeValue
    this.setState({
      tutorPic: activeElemSrc,
      toggle: false
    })
  }
}

changeImage = (e) => {
  e.preventDefault();
  this.setState({
    toggle:true
  })
}
//handleinputchange
handleInputChange = event => {
  event.preventDefault();
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
        <Row>
          {!this.state.toggle && <img src={!this.state.tutorPic ? this.props.tutor.tutorPic : this.state.tutorPic}/>}
        </Row>
        <Row>
            {!this.state.toggle && <Button onClick={this.changeImage.bind(this)} >Change Avatar</Button> }
        </Row>
        <div className="header">Edit My Account</div>
          <form>
            <Row>
              <Input name="username" onChange={this.handleInputChange} value={this.props.tutor.username} placeholder="" s={6} label="" disabled/>
              <Input name="email" onChange={this.handleInputChange} value={this.props.tutor.email} placeholder="" s={12} label="" disabled/>
              {this.state.toggle && (
                  <Carousel
                    name="images"
                    onClick={this.hasActiveClass.bind(this)}
                    value={this.state.tutorPic}
                    fixedItem={<div>Scroll to choose an Avatar</div>}
                    images={this.state.images}
                  />
                  
                )
              }
              {this.state.toggle && <Button onClick={this.hasActiveClass} >Click here to select Avatar</Button>}
              <Input name="contract" onChange={this.handleInputChange} value={this.state.contract} placeholder={this.props.tutor.contract} s={12} label="Contract" />
              <Input name="totalStudents" onChange={this.handleInputChange} value={this.state.totalStudents} placeholder={this.props.tutor.totalStudents} s={12} label="Total Students" disabled/>
           </Row>
          </form>

          <Row>
            <Button onClick={this.handleFormSubmit}>Submit</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

export default EditTutor;
