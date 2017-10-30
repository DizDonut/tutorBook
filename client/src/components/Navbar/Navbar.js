import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";

const Nav = props =>

<Navbar brand='Bao Bao Book' right>
	<NavItem href='#'>Dashboard</NavItem>
	<NavItem href='/'>Logout</NavItem>
</Navbar>

export default Nav;
