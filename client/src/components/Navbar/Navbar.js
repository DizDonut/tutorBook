import React, {Component} from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";
import { Redirect } from 'react-router-dom'
import Moment from 'moment';
import tz from 'moment-timezone';



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
		<Navbar>
			<img className="" src="Images/whitelogo2.png"/>
			<NavItem href='/Tutors'>Dashboard</NavItem>
      <NavItem href='/Tutors/account'>Your Profile</NavItem>
      {/* <NavItem href='/Tutors/account'>Edit Tutor Profile</NavItem> */}
      <NavItem href='/Tutors/addStudent'>Add Student</NavItem>
      <NavItem onClick={this._logout} href='/'>Logout</NavItem> {/*  */}
      <strong className="">{Moment().tz('Asia/Shanghai').format("dddd, MMMM Do YYYY, HH:mmA")}</strong>
		</Navbar>
	)
  }
}
}



export default Nav;

