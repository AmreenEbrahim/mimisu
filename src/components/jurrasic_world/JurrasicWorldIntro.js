import React from "react";
import { Grid, Container } from "semantic-ui-react";
// import WhatIDid from "../layouts/WhatIDid";

const JurrasicWorldIntro = () => {
	return (
		<Container>
			<Grid divided="vertically">
				<Grid.Row columns="2">
					<Grid.Column floated="left">
						<Grid.Row columns="2" width={8}>
							<Grid.Column>
								<Grid.Row as="h6">MIMISU</Grid.Row>
								<Grid.Row as="h1">Jurassic World Miniature Game</Grid.Row>
								<Grid.Row as="div">
									We created a new website for Jurassic World the miniature
									game. Exod Studio as fans of Jurassic World are proud to work
									with Universal and Amblin to create the boardgame for Jurassic
									World. We got the honour to create a webshop where Jurassic
									fans can find information, buy and talk about the boardgames,
									collector items and much more!
								</Grid.Row>
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>
					{/* <WhatIDid className="wat" align="middle" textAlign="center" /> */}
					<Grid.Column textAlign="center" className="wat">
						<Grid.Row as="div" className="jurrasic_world-right">
							What i did{" "}
						</Grid.Row>
						<Grid.Row>UI design UX </Grid.Row>
						<Grid.Row>Design</Grid.Row>
						<Grid.Row>Visual design</Grid.Row>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default JurrasicWorldIntro;
