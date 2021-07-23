import React from "react";
import { Grid, Container } from "semantic-ui-react";

const MimisuIntro = () => {
	return (
		<Container>
			<Grid divided="vertically">
				<Grid.Row columns="2">
					<Grid.Column floated="left">
						<Grid.Row columns="3" width={8}>
							<Grid.Column as="h6">MIMISU</Grid.Column>
							<Grid.Column as="h2">Mimisu Clothings</Grid.Column>
							<Grid.Column as="div">
								A part of life for me is about experiencing things that fulfills
								my soul. One of those things are designing clothes and
								photography. I started my brand a year ago and the feedback has
								been amazing! My first collection sold out in a week, with
								orders from France till Italy. Currently i’m selling in two
								stores in Amsterdam, which im very gratefull for.  All the
								clothes are handmade and have swarovski details to top it off! .
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default MimisuIntro;
