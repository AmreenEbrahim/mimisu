import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const WhatIDid = props => {
	// console.log("whatidid", align);

	return (
		<Grid.Column
			className="h5-wid"
			Row="4"
			textAlign={props.textAlign ? props.textAlign : "center"}
			verticalAlign={props.align ? props.align : "middle"}
		>
			<Grid.Row as="h5">What i did </Grid.Row>
			<Grid.Row>UI design </Grid.Row>
			<Grid.Row>UX Design</Grid.Row>
			<Grid.Row>Visual design</Grid.Row>
		</Grid.Column>
	);
};

export default WhatIDid;
