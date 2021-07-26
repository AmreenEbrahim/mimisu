import React from "react";
import { Grid, Container } from "semantic-ui-react";
import WhatIDid from "../layouts/WhatIDid";

const ShootFighterIntro = () => {
	return (
		<Container>
			<Grid divided="vertically">
				<Grid.Row columns="2">
					<Grid.Column floated="left">
						<Grid.Row columns="2" width={8}>
							<Grid.Column as="h6">MIMISU</Grid.Column>
							<Grid.Column as="h1">
								<p>Shoot-fighters</p>
							</Grid.Column>
							<Grid.Column as="div">
								Imagine a optimistic space-opera universe, in which the peoples
								of the galaxy converge on the Center, a multicultural diplomatic
								body. Galacteans can travel across the galaxy using proxies,
								artificial bodies, and incredible virtual reality. This
								pan-galactic civilization is in full swing. Magnificent space
								animals migrate along thousand-year-old space paths. We got to
								make the website for Shoot-fighters, which will be expanded.
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>
					<WhatIDid align="middle" textAlign="center" />
					{/* <Grid.Column Row="4" textAlign="right" floated="right">
						<Grid.Row as="h2">What i did </Grid.Row>
						<Grid.Row>UI design UX </Grid.Row>
						<Grid.Row>Design</Grid.Row>
						<Grid.Row>Visual design</Grid.Row>
					</Grid.Column> */}
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default ShootFighterIntro;
