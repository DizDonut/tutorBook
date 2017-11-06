import React, {Component} from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";
import { Redirect } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: ""
    }
  }

  //onclick destroy the localStorage session, and redirect to the homepage
  _logout(event) {
    localStorage.removeItem('tutor')
    this.setState({
      loggedIn: false,
      tutor: null,
      redirectTo: "/"
    })
  }


render() {
  if (!!this.state.redirectTo) {
    return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
	return (
		<Navbar brand='Bao Bao Book' right>
			<NavItem href='#'>TutorName</NavItem>
			<NavItem href='/Tutors'>Tutors Page</NavItem>
      <NavItem href='/Tutors/account'>Tutor Profile</NavItem>
      <NavItem href='/Tutors/account'>Edit Tutor Profile</NavItem>
      <NavItem href='/Tutors/addStudent'>Add Student Profile</NavItem>
      <NavItem onClick={this._logout} href='/'>Logout</NavItem> {/*  */}
		</Navbar>
	)
  }
}
}
export default Nav;

