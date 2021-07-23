import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import WhatIDid from "../layouts/WhatIDid";

const SpinningImages = () => {
	return (
		<Container>
			<Grid Row="2" centered width="100%">
				<Grid.Row>
					<video
						className="video-container video-container-overlay"
						width="100%"
						autoPlay
						loop
						muted
					>
						<source
							src="../../img/Spinning-Records/follow.mp4"
							type="video/mp4"
						/>
					</video>{" "}
				</Grid.Row>
				<Grid.Row columns="3">
					<Grid.Column>
						<Image
							className="img-padding"
							src="../../img/Spinning-Records/road.jpeg"
							size="medium"
						/>
					</Grid.Column>
					<Grid.Column>
						<Container>
							<video
								className="video-container video-container-overlay"
								width="450"
								height="350"
								autoPlay
								loop
								muted
							>
								<source
									src="../../img/Spinning-Records/spinning.mp4"
									type="video/mp4"
								/>
							</video>
						</Container>
					</Grid.Column>
					<WhatIDid textAlign="center" verticalAlign="middle" />
					{/* <Grid.Column Row="4" textAlign="center" verticalAlign="middle">
						<Grid.Row>What i did </Grid.Row>
						<Grid.Row>UI design UX </Grid.Row>
						<Grid.Row>Design</Grid.Row>
						<Grid.Row>Visual design</Grid.Row>
					</Grid.Column> */}
				</Grid.Row>

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

export default SpinningImages;
