import React from "react";
import { Button, Collapsible, CollapsibleItem, Input, Row } from "react-materialize";
import "materialize-css";

const Join = () =>

<div>
	<Collapsible>
	 <CollapsibleItem header='Register Now!' icon='toys'>
		 <Row>
		 	 <Input placeholder="" s={12} label="Email Address" />
			 <Input placeholder="" s={12} label="Username" />
			 <Input placeholder="" type="password" label="Password" s={12} />
			 <Input placeholder="" type="password" label="Confirm Password" s={12} />
		 </Row>
		 <Row>
		 	<Button waves="light">Submit</Button>
		 </Row>
	 </CollapsibleItem>
	</Collapsible>
</div>

export default Join;
