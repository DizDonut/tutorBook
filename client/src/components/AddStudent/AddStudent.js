import React, { Component } from "react";
import { Button, Container, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";
//import API from "../../utils/API";
import "./AddStudent.css";

class AddStudent extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
      firstName: "",
      studentId: null,
      birthday: null,
      age:null,
      location:"",
      picture: "",
      family:{
        mom: false,
        dad: false,
        sister: false,
        brother: false
      },
      likes: "",
      notes: "",
      editStudentPage:false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = event => {
    const target = event.target;
    const{name,value} = event.target;
    // const name = event.name;
    // var value;
    
    // if(target.type === 'checkbox'){
    //   alert(name);
    //   value = target.checked?1:0;
    // } else {
    //   value = target.value;
    // }
    // const name = target.name;
    //alert(name);
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

  handleFormSubmit = event => {
    event.preventDefault();
      const studentProfile = {
        firstName: this.state.firstName,
        studentId: this.state.studentId,
        birthday: this.state.birthday,
        age:this.state.age,
        location:this.state.location,
        picture: this.state.picture,
        family:{
          mom: this.state.mom,
          dad: this.state.dad,
          sister: this.state.sister,
          brother: this.state.brother
        },
        likes: this.state.likes,
        notes: this.state.notes
      }
    if (!this.state.editStudentPage) {
      console.log("new student route")
      this.props._tutorStudentProfileUpdate(studentProfile);
    }
    //alert(this.state.mom);

    
  }
  componentDidMount() {
    this.setState(function(prevState,props) {
      return {
        editStudentPage: props.studentMatch ? true : false
      }
    })
  }
//API function itself needs to move to the parent component, so that you can just call your API from wherever you want to on this page.
//API should find the tutor with the matching ID from this.state.tutor and update their data

render(){
    return (
      <div>
        <Container>
        <div className="header">Add a New Student</div>
          <Collapsible>
            <CollapsibleItem header="Student Name" icon='add'>
              <form>
                <Row>
                  <Input name="firstName" onChange={this.handleInputChange} value={this.state.firstName} placeholder={this.state.editStudentPage ? this.props.studentData[0].firstName : "First Name"} s={12} />
                  <Input name="studentId" onChange={this.handleInputChange} value={this.state.studentId} placeholder={this.state.editStudentPage ? this.props.studentData[0].studentId :"6 digit Student Id"} s={12} />
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>
          <Collapsible>
            <CollapsibleItem header="Student Details" icon='add'>
              <form>
                <Row>
                  <Input name="birthday" type="date" onChange={this.handleInputChange} value={this.state.birthday} placeholder={this.state.editStudentPage ? this.props.studentData[0].birthday : "Birthday"} s={12} />
                  <Input name="age" onChange={this.handleInputChange} value={this.state.age} placeholder={this.state.editStudentPage ? this.props.studentData[0].age : "Age"} s={12} />
                  <Input name="location" onChange={this.handleInputChange} value={this.state.location} placeholder={this.state.editStudentPage ? this.props.studentData[0].location : " Location - e.g. 'City/State/Region/Province'"} s={12} />
                  <Input name="likes" type="textarea" onChange={this.handleInputChange} value={this.state.likes} placeholder={this.state.editStudentPage ? this.props.studentData[0].likes : "Likes"} s={12} />
                  <Input name="notes" type="textarea" onChange={this.handleInputChange} value={this.state.notes} placeholder={this.state.editStudentPage ? this.props.studentData[0].notes : "Additional Notes"} s={12} />
                  <Row>
                    <Input name="mom" type="checkbox" value="Mom" label="Mom" onChange={this.handleInputChange} defaultChecked={this.props.studentMatch !== null && this.props.studentData[0].family.mom ? "checked" : ""}/>
                    <Input name="dad" type="checkbox" value="Dad" label="Dad" onChange={this.handleInputChange} defaultChecked={this.handleInputChange} defaultChecked={this.props.studentMatch !== null && this.props.studentData[0].family.dad ? "checked" : ""} data-value={this.state.family.dad}/>
                    <Input name="sister" type="checkbox" value="Sister" label="Sister" onChange={this.handleInputChange} defaultChecked={this.props.studentMatch !== null && this.props.studentData[0].family.sister ? "checked" : ""} data-value={this.state.family.sister}/>
                    <Input name="brother" type="checkbox" value="Brother" label="Brother" onChange={this.handleInputChange} defaultChecked={this.props.studentMatch !== null && this.props.studentData[0].family.brother ? "checked" : ""} data-value={this.state.family.brother}/>
                  </Row>
                  <Input name="picture" onChange={this.handleInputChange} value={this.state.picture} placeholder="Profile image - e.g. http://moziru.com/images/drawn-panda-cartoon-5.jpg" s={12} />
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>
          <Row>
            {this.props.studentData.length > 0 && <Button className="updateForm" waves="light" onClick={this.handleFormSubmit.bind(this)}>Update Profile</Button>}
            {this.props.studentData.length < 1 && <Button className="newForm" waves="light" onClick={this.handleFormSubmit.bind(this)}>Submit</Button>}
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddStudent;
