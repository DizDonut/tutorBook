import React, {Component} from "react";
import { Button, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      redirectTo: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  //handleinputchange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props._login(this.state.username,this.state.password)
  }

	render() {
    return (
      <div>
        <Collapsible>
          <CollapsibleItem header='Login Here' icon='perm_identity'>
            <Row>
              <Input name="username" onChange={this.handleInputChange} value={this.state.username} placeholder="username" s={12} label="username" />
              <Input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" label="password" s={12} />
            </Row>
            <Row>
              <Button waves="light" onClick={this.handleFormSubmit}>Submit</Button>
            </Row>
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}
export default Login;
