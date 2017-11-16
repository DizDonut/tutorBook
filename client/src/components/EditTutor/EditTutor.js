import React, { Component } from "react";
import { Button, Carousel, Container, Input, Row, Collapsible, CollapsibleItem } from "react-materialize";
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
    toggle: false,
    tutor: this.props.tutor
  };

  this.handleInputChange = this.handleInputChange.bind(this)
  this.hasActiveClass = this.hasActiveClass.bind(this)
  this.changeImage = this.changeImage.bind(this)
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

changeImage(e) {
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
  // this.checkForBlanks(this.state.contract,this.state.tutorPic,() => {
    const profile = {
      tutorPic: this.state.tutorPic,
      contract: this.state.contract
    }
    this.props._tutorProfileUpdate(profile)
  // })
}

// checkForBlanks(contract,tutorPic,cb) {

//   if (contract === "") {
//     this.setState({
//       contract: "bubbles"
//     })
//   }
//   if (tutorPic === null) {
//     this.setState({
//       tutorPic: '/Images/avatars/male/mAvatar6.png'
//     })
//   }
//   cb();
// }


render(){

    return (
      <div>
        <Container>
        <Row>
          {!this.state.toggle && <img src={!this.state.tutorPic ? this.props.tutor.tutorPic : this.state.tutorPic}/>}
        </Row>
        <Row>
            {!this.state.toggle && <Button onClick={this.changeImage} >Change Avatar</Button> }
        </Row>
        <div className="header">Edit My Account</div>
        <Collapsible>
          <CollapsibleItem header="Edit Profile" icon='add'>
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
                  <Input name="contract" onChange={this.handleInputChange} value={this.state.contract} placeholder={this.props.tutor.contract ? this.props.tutor.contract: "Contract length (e.g. 11/07/2016 - 11/07/2017)" } s={12}/>
                  <Input name="totalStudents" onChange={this.handleInputChange} value={this.state.totalStudents} placeholder={this.props.tutor && this.props.tutor.students ? this.props.tutor.students.length : "No Students yet" } s={12} disabled/>
            </Row>
            </form>
              <Row>
                <Button onClick={this.handleFormSubmit}>Submit</Button>
              </Row>
            </CollapsibleItem>
          </Collapsible>
        </Container>
      </div>
    )
  }
}

export default EditTutor;
