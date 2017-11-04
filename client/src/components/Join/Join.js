import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Button, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";//Toast
import "materialize-css";
import API from "../../utils/API";

class Join extends Component {
// const Join = () =>
constructor() {
    super()
    this.state = {
        email: "",
        username: "",
        password: "",
        confirmPass: "",
        redirectTo:""
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

//submit form
handleFormSubmit = event => {
    event.preventDefault();
        API.register({
            email: this.state.email,
            username:this.state.username,
            password:this.state.password
        }).then((res,err) => {
            console.log(res)
            if (err) {
                console.log(err)
            }
            this.setState({
                redirectTo:'/'
            })
            // document.write(JSON.stringify(res));
        })
}

// confirmPassword = ( pass, confirm ) => {
// 	if (pass === confirm) {
// 		<Toast toast="Passwords matched"></Toast>
// 		return true;
// 	} else {
// 		<Toast toast="Passwords Do Not Match"></Toast>
// 		return false;
// 	}
// }

  render(){
    if (!!this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <Collapsible>
            <CollapsibleItem header='Register Now!' icon='person add'>
            <form>
                <Row>
                    <Input name="email" onChange={this.handleInputChange} value={this.state.email} placeholder="" s={12} label="Email Address" />
                    <Input name="username" onChange={this.handleInputChange} value={this.state.username} placeholder="" s={12} label="Username" />
                    <Input name="password" onChange={this.handleInputChange} value={this.state.password} placeholder="" type="password" label="Password" s={12} />
                    <Input name="confirmPassword" onChange={this.handleInputChange} value={this.state.confirmPassword} placeholder=""  type="password" label="Confirm Password" s={12} />
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
}
export default Join;
