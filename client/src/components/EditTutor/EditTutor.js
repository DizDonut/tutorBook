import React, { Component } from "react";
import { Button, Container, Input, Row } from "react-materialize";
import "materialize-css";
import API from "../../utils/API";
import "./EditTutor.css";

class EditTutor extends Component {

    state = {
        username: "admin",
        password: "admin",
        email: "",
        tutorPic: "",
        contract: "I don't have one",
        totalStudents: ""
    };

//handleinputchange
handleInputChange = event => {
	const{name,value} = event.target;
	this.setState({
		[name]:value
	})
}

//submit form
handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.username && this.state.password) {
    console.log("editTutor");
    API.updateTutor({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      tutorPic: this.state.tutorPic,
      contract: this.state.contract,
      totalStudents: this.state.totalStudents
    })
      .then(res => 
        {
            window.location= "/Tutors/:id";
        })
      .catch(err => console.log(err));
  }
};

render(){
    return (
      <div>
        <Container>
        <div className="header">Edit My Account</div>
              <form>
                <Row>
                  <Input name="username" onChange={this.handleInputChange} value={this.state.username} placeholder="" s={6} label="Username" />
                  <Input name="password" onChange={this.handleInputChange} value={this.state.password} placeholder="" s={6} label="Password" />
                  <Input name="email" onChange={this.handleInputChange} value={this.state.email} placeholder="" s={12} label="Email" />
                  <Input name="tutorPic" onChange={this.handleInputChange} value={this.state.tutorPic} placeholder="" s={12} label="Picture" />
                  <Input name="contract" onChange={this.handleInputChange} value={this.state.contract} placeholder="" s={12} label="Contract" />
                  <Input name="totalStudents" onChange={this.handleInputChange} value={this.state.totalStudents} placeholder="" s={12} label="Total Students" />
               </Row>
              </form>


          {/*<Collapsible>
            <CollapsibleItem header="My Students" icon='add'>
              <form>
                <Row>
                  <Input name="birthday" type="date" onChange={this.handleInputChange} value={this.state.birthday} placeholder="" s={12} label="Birthday" />
                  <Input name="age" onChange={this.handleInputChange} value={this.state.age} placeholder="" s={12} label="Age" />
                  <Input name="location" onChange={this.handleInputChange} value={this.state.location} placeholder="" s={12} label="Location" />
                  <Input name="likes" type="textarea" onChange={this.handleInputChange} value={this.state.likes} placeholder="" s={12} label="Likes" />
                  <Input name="notes" type="textarea" onChange={this.handleInputChange} value={this.state.notes} placeholder="" s={12} label="Additional Notes" />
                  <Row>

                    <Input name="family" type="checkbox" value="Mom" label="Mom" onChange={this.handleInputChange} value={this.state.family}/>
                    <Input name="family" type="checkbox" value="Dad" label="Dad" onChange={this.handleInputChange} value={this.state.family}/>
                    <Input name="family" type="checkbox" value="Sister" label="Sister" onChange={this.handleInputChange} value={this.state.family}/>
                    <Input name="family" type="checkbox" value="Brother" label="Brother" onChange={this.handleInputChange} value={this.state.family}/>

                  </Row>
                  <Input name="picture" onChange={this.handleInputChange} value={this.state.picture} placeholder="" s={12} label="Picture" />
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>
          */}
          <Row>
            <Button waves="light" onClick={this.handleFormSubmit}>Submit</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

export default EditTutor;
