import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";

const JurrasicWorldIntro = () => {
	return (
		<Container>
			<Grid divided="vertically">
				<Grid.Row columns="2">
					<Grid.Column floated="left">
						<Grid.Row columns="2" width={8}>
							<Grid.Column as="h1">Jurassic World Miniature Game</Grid.Column>
							<Grid.Column as="div">
								We created a new website for Jurassic World the miniature game.
								Exod Studio as fans of Jurassic World are proud to work with
								Universal and Amblin to create the boardgame for Jurassic World.
								We got the honour to create a webshop where Jurassic fans can
								find information, buy and talk about the boardgames, collector
								items and much more!
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>
					<Grid.Column Row="4" textAlign="right" floated="right">
						<Grid.Row as="h2">What i did </Grid.Row>
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
