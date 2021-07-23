import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import WhatIDid from "../layouts/WhatIDid";

const MimisuImages = () => {
	return (
		// <Container>
		<Grid stackable>
			<Grid.Row columns="2">
				<Grid.Column
					width={9}
					// className="col-12 col-md-5 col-lg-5"
					verticalAlign="middle"
				>
					<Image src="../../img/mimisu/clover-top.jpg" size="large" />
				</Grid.Column>

				<Grid.Column width={6} verticalAlign="middle" textAlign="left">
					<Image src="../../img/mimisu/dress.png" size="large" />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row columns="2" relaxed>
				<Grid.Column width={8} textAlign="left">
					<Image
						className="img-padding"
						src="../../img/mimisu/halter-top.png"
						size="large"
					/>
				</Grid.Column>
				<WhatIDid align="top" textAlign="right" />
				{/* <Grid.Column Row="4" textAlign="right" verticalAlign="top">
					<Grid.Row as="h5">What i did </Grid.Row>
					<Grid.Row>UI design UX </Grid.Row>
					<Grid.Row>Design</Grid.Row>
					<Grid.Row>Visual design</Grid.Row>
				</Grid.Column> */}
				{/* <Grid.Column verticalAlign="top" textAlign="left"></Grid.Column> */}
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={9}>
					<Image
						spaced="left"
						floated="left"
						src="../../img/mimisu/acacia.png"
						size="large"
					/>
				</Grid.Column>
				<Grid.Column Row="2" textAlign="center" verticalAlign="middle">
					<Grid.Row as="h5">Acacia Dress </Grid.Row>
					<Grid.Row>My bestseller </Grid.Row>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row verticalAlign="middle" textAlign="center">
				<Image centered src="../../img/mimisu/skirt.jpg" size="large" />
			</Grid.Row>
		</Grid>
		// </Container>
	);
};

export default MimisuImages;
