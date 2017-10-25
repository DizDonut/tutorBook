import React from "react";
import { Button, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";

const Join = () =>

<div>
	<Collapsible>
	 <CollapsibleItem header='Register Now!' icon='toys'>
		 <Row>
		 	 <Input placeholder="Email address" s={3} label="email" />
			 <Input placeholder="Create username" s={3} label="createUsername" />
			 <Input type="password" label="createPassword" s={3} />
			 <Input type="password" label="confirmPassword" s={3} />
		 </Row>
		 <Row>
		 	<Button waves="light">Submit</Button>
		 </Row>
	 </CollapsibleItem>
	</Collapsible>
</div>

export default Join;
