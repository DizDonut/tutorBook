import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";

const Nav = props =>

<Navbar brand='Bao Bao Book' right>
	<NavItem href='#'>Dashboard</NavItem>
	<NavItem href="/Tutors/addStudent">Add a New Student</NavItem>
	<NavItem href="/Tutors/account">Edit My Account Details</NavItem>
	<NavItem href='/'>Logout</NavItem>
</Navbar>

export default Nav;
