import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import { Button, Collapsible, CollapsibleItem, Input, Row} from "react-materialize";
import "materialize-css";

class Join extends Component {
  // const Join = () =>
  constructor(props) {
      super(props)
      this.state = {
          email: "",
          username: "",
          password: "",
          open: false
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
  }

  //handleinputchange
  handleInputChange = event => {
      const{name,value} = event.target;
      this.setState({
          [name]:value
      })
  }

  //submit form: TO DO: error handling when they are already registered. currenty returns json with a custom err message, but should return an error handler instead
  handleFormSubmit = event => {
    event.preventDefault();
    this.props._join(this.state.email, this.state.username, this.state.password)
  }


  render(){
    return (
      //   can you toggle this button, if submit clicked, send a confirmation message and collapse?
      <Collapsible>
          <CollapsibleItem header='Register Now!' icon='person add'>
          <form className="registerForm">
              <Row>
              <Input
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
                placeholder=""
                s={12}
                label="Email Address"
              />
              <Input
                name="username"
                onChange={this.handleInputChange}
                value={this.state.username}
                placeholder=""
                s={12}
                label="Username"
              />
              <Input
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                placeholder=""
                type="password"
                label="Password"
                s={12}
              />
            </Row>
            <Row>
              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Row>
          </form>
        </CollapsibleItem>
      </Collapsible>
    )
  }
}

export default Join;
