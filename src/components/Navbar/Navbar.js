import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";

const Nav = props =>

<Navbar brand='Bao Bao Book' right>
	<NavItem href='get-started.html'>page name</NavItem>
	<NavItem href='components.html'>page name</NavItem>
</Navbar>

export default Nav;
