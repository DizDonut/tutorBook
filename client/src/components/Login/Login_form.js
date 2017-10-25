import React from "react";
import { Button, Input, Modal, Row } from "react-materialize";

const Login_form = ()=>
<Modal
	header='Join Now'
	trigger={<Button>Submit</Button>}>
	<Row>
		<Input placeholder="Placeholder" s={3} label="username" />
		<Input type="password" label="password" s={3} />
	</Row>
</Modal>

export default Login_form;
