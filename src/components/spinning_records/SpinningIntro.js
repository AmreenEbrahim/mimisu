import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";

const SpinningIntro = () => {
	return (
		<Container>
			<Grid divided="vertically">
				<Grid.Row columns="2">
					<Grid.Column floated="left">
						<Grid.Row columns="3" width={8}>
							<Grid.Column as="h6">MIMISU</Grid.Column>
							<Grid.Column as="h2">Spinning Records</Grid.Column>
							<Grid.Column as="div">
								We made a music video for Blasterjaxx called Follow. Our crew
								flew to Fuerteventura to create some magic. A music video that
								breathes freedom, nature and affection. We met a lot of new
								locals that showed us the hidden gems on the island. Which makes
								this music video more special because those shots on new places
								were not planned.
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SpinningIntro;
