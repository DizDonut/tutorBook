import React, {Component} from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";
import { Redirect } from 'react-router-dom'
import Moment from 'moment';
import tz from 'moment-timezone';
import brand from "./whitelogo2.png"


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: ""
    }
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleRedirect(href) {
    this.setState({
      redirectTo: href
    })
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
    <Navbar fixed={false} brand={<img src={brand} />} right>
      <NavItem onClick={() => this.handleRedirect("/Tutors")} href='/Tutors'>Dashboard</NavItem>
      <NavItem onClick={() => this.handleRedirect('/Tutors/account')} href='/Tutors/account'>Your Profile</NavItem>
      {/* <NavItem href='/Tutors/account'>Edit Tutor Profile</NavItem> */}
      <NavItem onClick={() => this.handleRedirect('/Tutors/addStudent')} href='/Tutors/addStudent'>Add Student</NavItem>
      <NavItem onClick={ this._logout} href='/'>Logout</NavItem> {/*  */}
      <NavItem divider />
      <NavItem> {Moment().tz('Asia/Shanghai').format("dddd, MMMM Do YYYY, HH:mmA")}</NavItem>
		</Navbar>
	)
  }
}
}



export default Nav;

