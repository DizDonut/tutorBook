import React from "react";

export const Login_from = ()=> 
<Modal
	header='Join Now'
	trigger={<Button>Submit</Button>}>
	<Row>
		<Input placeholder="Placeholder" s={3} label="username" />
		<Input type="password" label="password" s={3} />
	
</Row>
</Modal>

export default Login_form;