import React from "react";
import { Button, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";

const Login = () =>

<div>
	<Collapsible>
		<CollapsibleItem header='Login Here' icon='perm_identity'>
			<Row>
				<Input placeholder="username" s={12} label="username" />
				<Input type="password" label="password" s={12} />
			</Row>
			<Row>
			 <Button waves="light">Submit</Button>
			</Row>
		</CollapsibleItem>
	</Collapsible>
</div>

export default Login;
