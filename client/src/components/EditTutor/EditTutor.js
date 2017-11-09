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
    tutorPic: "",
    contract: "",
    totalStudents: "",
    myClass: "active"
  };

  this.handleInputChange = this.handleInputChange.bind(this)
  this.hasActiveClass = this.hasActiveClass.bind(this)
}


hasActiveClass = () => {
  for (var i = 0; i < this.state.images.length; i++) {
    console.log(this.state.images[i]);
    if (this.state.images[i].classList.contains(this.state.myClass)) {
      console.log(`${this.state.images[i]} is currently active`);
      this.setState({
        tutorPic: this.state.images[i]
      })
    } else {
      alert("At least I know the function was called");
    }
  }
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
              <Input name="username" onChange={this.handleInputChange} value={this.props.tutor.username} placeholder="" s={6} label="" disabled/>
              <Input name="email" onChange={this.handleInputChange} value={this.props.tutor.email} placeholder="" s={12} label="" disabled/>
              <Carousel
                fixedItem={<Button disabled>Choose an Avatar</Button>}
                images={this.state.images}
              />
              <Input name="contract" onChange={this.handleInputChange} value={this.state.contract} placeholder="MM/DD/YYYY - MM/DD/YYYY" s={12} label="Contract" />
              <Input name="totalStudents" onChange={this.handleInputChange} value={this.state.totalStudents} placeholder="" s={12} label="Total Students" disabled/>
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
