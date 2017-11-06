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
	family:{
		mom: false,
		dad: false,
		sister: false,
		brother: false
	},
  likes: [],
  notes: []
};

//handleinputchange
handleInputChange = event => {
	const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
	this.setState({
		[name]:value
	})
}

// checkboxCheck = () => {
//   const checkboxes = document.getElementsByName("family");
//   console.log(checkboxes);
//         const checkboxesChecked = [];

//   for (let i=0; i<checkboxes.length; i++) {
   
//      if (checkboxes[i].checked) {
//         checkboxesChecked.push(checkboxes[i].value);
//      }
//   }
// }

//submit form
//API function itself needs to move to the parent component, so that you can just call your API from wherever you want to on this page.
//API should find the tutor with the matching ID from this.state.tutor and update their data
handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.firstName && this.state.lastName) {
    API.saveStudent({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthday: this.state.birthday,
      age: this.state.age,
      location: this.state.location,
      family: this.state.family,
      likes: this.state.likes,
      notes: this.state.notes
    })
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  }
};

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

                    <Input name="Mom" type="checkbox" value="Mom" label="Mom" onChange={this.handleInputChange} data-value={this.state.family.mom}/>
                    <Input name="Dad" type="checkbox" value="Dad" label="Dad" onChange={this.handleInputChange} data-value={this.state.family.dad}/>
                    <Input name="Sister" type="checkbox" value="Sister" label="Sister" onChange={this.handleInputChange} data-value={this.state.family.sister}/>
                    <Input name="Brother" type="checkbox" value="Brother" label="Brother" onChange={this.handleInputChange} data-value={this.state.family.brother}/>

                  </Row>
                  <Input name="picture" onChange={this.handleInputChange} value={this.state.picture} placeholder="" s={12} label="Picture" />
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
