import React from "react";
import { Grid, Container } from "semantic-ui-react";

const ShootFighterImages = () => {
	// const images = [
	// 	{
	// 		name: "image1",
	// 		type: "video",
	// 		src: "../../img/shootfighters/home.png"
	// 	},
	// 	{
	// 		name: "image1",
	// 		type: "image",
	// 		src: "../../img/shootfighters/menu.png"
	// 	},
	// 	{
	// 		name: "image1",
	// 		type: "video",
	// 		src: "../../img/shootfighters/projets.png"
	// 	},
	// 	{
	// 		name: "image1",
	// 		type: "image",
	// 		src: "../../img/shootfighters/visuels.png"
	// 	}
	// ];
	// const home = ../img/shootfighters/home.png";
	return (
		<Container>
			<Grid Row="4" centered>
				<Grid.Row>
					<video
						className="video-container video-container-overlay"
						width="1150px"
						height="748px"
						autoPlay
						loop
						muted
					>
						<source src="../../img/shootfighter.mp4" type="video/mp4" />
					</video>
				</Grid.Row>
				<Grid.Row>
					<img
						width="1303px"
						height="749px"
						src="../../img/shootfighters/projets.png"
						alt="no img"
					/>
				</Grid.Row>

				<Grid.Row>
					<video
						className="video-container video-container-overlay"
						width="1150px"
						height="748px"
						autoPlay
						loop
						muted
					>
						<source src="../../img/shootfighter2.mp4" type="video/mp4" />
					</video>
				</Grid.Row>
				<Grid.Row>
					<img
						width="1300px"
						height="677px"
						size="large"
						alt="No img"
						src="../../img/shootfighters/visuels.png"
					/>
				</Grid.Row>

				{/* {images.map(image => {
					console.log("type", image.type);
					{
						image.type === "video" ? (
							<div>hello</div>
						) : (
							<Grid.Row>
								<div>hi</div>
							</Grid.Row>
						);
					}
				})} */}
				{/* {images.map(image => (
					<Grid.Row>
						<img size="large" src={image.src} />
					</Grid.Row>
				))} */}
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
