import React from "react";
import { Button, Input, Modal, Row } from "react-materialize";

const Join_now_form = ()=>
<Modal
	header='Join Now'
	trigger={<Button>submit</Button>}>
	<Row>
		<Input placeholder="Placeholder" s={3} label="First Name" />
		<Input s={3} label="Last Name" />
        <Input s={3} label="username" />
		<Input type="password" label="password" s={3} />
		<Input type="email" label="Email" s={3} />
	</Row>
</Modal>

export default Join_now_form;
