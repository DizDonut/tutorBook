import React, { Component } from "react";
import { Button, Container, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";
import API from "../../utils/API";
import "./AddStudent.css";

class AddStudent extends Component {

state = {
	firstName: "",
	lastName: "",
  birthday: "",
  age:"",
  location:"",
  picture: "",
	family:[{
		mom: "",
		dad: "",
		sister: "",
		brother: ""
	}],
  likes: "",
  notes: ""
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
	if(this.state.email) {
		API.register({
			email: this.state.email,
			username:this.state.username,
			password:this.state.password
		}).then(res => {
			window.location= "/Tutors"
			// document.write(JSON.stringify(res));
		})
	}
}

render(){
    return (
      <div>
        <Container>
        <div className="header">Add a New Student</div>
          <Collapsible>
            <CollapsibleItem header="Student Name" icon='add'>
              <form>
                <Row>
                  <Input name="firstName" onChange={this.handleInputChange} value={this.state.firstName} placeholder="" s={12} label="First Name" />
                  <Input name="lastName" onChange={this.handleInputChange} value={this.state.lastName} placeholder="" s={12} label="Last Name" />
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>

          <Collapsible>
            <CollapsibleItem header="Student Details" icon='add'>
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
                  <Input className="fileInput" type="file" name="picture" onChange={this.handleInputChange} value={this.state.picture} placeholder="" s={12} label="Picture" />
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>

          <Row>
            <Button waves="light" onClick={this.handleFormSubmit}>Submit</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddStudent;
