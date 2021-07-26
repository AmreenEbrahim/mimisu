import React from "react";
import { Grid } from "semantic-ui-react";

const WhatIDid = props => {
	// console.log("whatidid", align);

	return (
		<Grid.Column
			Row="4"
			textAlign={props.textAlign ? props.textAlign : "center"}
			verticalAlign={props.align ? props.align : "middle"}
		>
			<Grid.Row as="h4">What i did </Grid.Row>
			<Grid.Row className="italic-font">UI design </Grid.Row>
			<Grid.Row className="italic-font">UX Design</Grid.Row>
			<Grid.Row className="italic-font">Visual design</Grid.Row>
		</Grid.Column>
	);
};

export default WhatIDid;
