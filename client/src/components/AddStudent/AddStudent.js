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
      editStudentPage:false,
      studentData: props.studentData
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleFormUpdatechange = this.handleInputChange.bind(this);
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
      // if (!this.state.editStudentPage) {
      console.log("new student route")
      this.props._tutorStudentProfileUpdate(studentProfile);
    // }
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
                  <div className="input-field col s12">
                    <Input ref="firstName" id="firstName" name="firstName" onChange={this.state.editStudentPage ? this.handleFormUpdateChange : this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].firstName : this.state.firstName} placeholder={"First Name"} />
                    <label for="firstName">Name</label>
                  </div>
                  <div className="input-field col s12">
                    <Input ref="studentId" id="studentId" name="studentId" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].studentId :this.state.studentId} placeholder={"6 digit Student Id"}/>
                    <label for="studentId">Student Id</label>
                  </div>
                </Row>
              </form>
            </CollapsibleItem>
          </Collapsible>
          <Collapsible>
            <CollapsibleItem header="Student Details" icon='add'>
              <form>
                <Row>
                  <div className="input-field col s12">
                    <Input ref="birthday" id="birthday" name="birthday" type="date" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].birthday : this.state.birthday} placeholder={"Birthday"} s={12} />
                    <label for="birthday">Birthday</label>
                  </div>
                  <div className="input-field col s12">
                    <Input ref="age" id="age" name="age" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].age : this.state.age} placeholder={"Age"} s={12} />
                    <label for="age">Age</label>
                  </div>
                  <div className="input-field col s12">
                    <Input ref="location" id="location" name="location" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].location : this.state.location} placeholder={"Location - e.g. 'City/State/Region/Province'"} s={12} />
                    <label for="location">Location</label>
                  </div>
                  <div className="input-field col s12">
                    <Input ref="likes" id="likes" name="likes" type="textarea" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].likes : this.state.likes} placeholder={"Likes"} s={12} />
                    <label for="likes">Likes</label>
                  </div>
                  <div className="input-field col s12">
                    <Input ref="notes" id="notes" name="notes" type="textarea" onChange={this.state.editStudentPage ? this.handleFormUpdateChange :this.handleInputChange} value={this.state.editStudentPage ? this.state.studentData[0].notes : this.state.notes} placeholder={"Additional Notes"} s={12} />
                    <label for="notes">Notes</label>
                  </div>
                  <div className="input-field col s12">
                    <Input id="family" name="mom" type="checkbox" value="Mom" label="Mom" onChange={this.handleInputChange}  data-value={this.state.family.mom}/>
                    <Input name="dad" type="checkbox" value="Dad" label="Dad" onChange={this.handleInputChange}   data-value={this.state.family.dad}/>
                    <Input name="sister" type="checkbox" value="Sister" label="Sister" onChange={this.handleInputChange}  data-value={this.state.family.sister}/>
                    <Input name="brother" type="checkbox" value="Brother" label="Brother" onChange={this.handleInputChange} data-value={this.state.family.brother}/>
                  </div>
                  <div className="input-field col s12">
                    <Input id="picture" name="picture" onChange={this.handleInputChange} value={this.state.picture} placeholder="Profile image - e.g. http://moziru.com/images/drawn-panda-cartoon-5.jpg" s={12} />
                    <label for="picture">Picture</label>
                  </div>
                </Row>
              </form>
              <Row>
                {this.props.studentData.length > 0 && <Button className="updateForm" waves="light" onClick={this.handleFormSubmit.bind(this)}>Update Profile</Button>}
                {this.props.studentData.length < 1 && <Button className="newForm" waves="light" onClick={this.handleFormSubmit.bind(this)}>Submit</Button>}
              </Row>
            </CollapsibleItem>
          </Collapsible>
        </Container>
      </div>
    )
  }
}

export default AddStudent;
