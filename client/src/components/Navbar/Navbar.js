import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";

const Nav = props =>

<Navbar brand='Bao Bao Book' right>
	<NavItem href='#'>Tutors Page</NavItem>
	<NavItem href='#'>Tutor Profile</NavItem>
	<NavItem href='#'>Edit Tutor Profile</NavItem>
	<NavItem href='#'>Add Student Profile</NavItem>
	<NavItem href='/'>Logout</NavItem>
</Navbar>

export default Nav;

