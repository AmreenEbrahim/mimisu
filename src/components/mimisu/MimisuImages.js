import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
// import WhatIDid from "../layouts/WhatIDid";

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
					<Container>
						<Image src="../../img/mimisu/clover-top.jpg" size="large" />
					</Container>
				</Grid.Column>

				<Grid.Column
					className="img-padding"
					width={6}
					verticalAlign="middle"
					textAlign="left"
				>
					<Container>
						<Image src="../../img/mimisu/dress.png" size="large" />
					</Container>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row columns="2" relaxed className="mimisu-img2">
				<Grid.Column width={8} textAlign="left">
					<Container>
						<Image src="../../img/mimisu/halter-top.png" size="large" />
					</Container>
				</Grid.Column>
				{/* <WhatIDid align="top" textAlign="right" /> */}
				<Grid.Column
					className="wat"
					Row="4"
					textAlign="center"
					verticalAlign="top"
				>
					<Grid.Row as="h4">What i did </Grid.Row>
					<Grid.Row className="italic-font">Photography</Grid.Row>
					<Grid.Row className="italic-font">Fashion design</Grid.Row>
					<Grid.Row className="italic-font">Color grading</Grid.Row>
				</Grid.Column>
				{/* <Grid.Column verticalAlign="top" textAlign="left"></Grid.Column> */}
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={8}>
					<Container>
						<Image
							spaced="left"
							floated="left"
							src="../../img/mimisu/acacia.png"
							size="large"
						/>
					</Container>
				</Grid.Column>
				<Grid.Column
					className="wat"
					width={2}
					textAlign="left"
					verticalAlign="middle"
				>
					<Grid.Row as="h5">Acacia Dress </Grid.Row>
					<Grid.Row className="italic-font">My bestseller </Grid.Row>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row verticalAlign="middle" textAlign="center">
				<Container>
					<Image centered src="../../img/mimisu/skirt.jpg" size="large" />
				</Container>
			</Grid.Row>
		</Grid>
		// </Container>
	);
};

export default MimisuImages;
