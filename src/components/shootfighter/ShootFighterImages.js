import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import home from "../../img/shootfighters/home.png";

const ShootFighterImages = () => {
	const images = [
		{
			name: "image1",

			src: "../../img/shootfighters/home.png"
		},
		{
			name: "image1",
			src: "../../img/shootfighters/menu.png"
		},
		{
			name: "image1",
			src: "../../img/shootfighters/projets.png"
		},
		{
			name: "image1",
			src: "../../img/shootfighters/visuels.png"
		}
	];
	// const home = ../img/shootfighters/home.png";
	return (
		<Container>
			<Grid Row="3" centered width="100%">
				{images.map(image => (
					<Grid.Row>
						<img size="large" src={image.src} />
					</Grid.Row>
				))}
				{/* <Grid.Row>
					<Image size="large" src={home} />
				</Grid.Row>
				<Grid.Row>
					<Image size="large" src={home} />
				</Grid.Row>
				<Grid.Row>
					<Image size="large" src={home} />
				</Grid.Row> */}
			</Grid>
		</Container>
	);
};

export default ShootFighterImages;
