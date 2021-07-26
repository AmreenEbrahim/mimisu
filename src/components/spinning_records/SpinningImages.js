import React from "react";
import { Grid, Image } from "semantic-ui-react";
// import WhatIDid from "../layouts/WhatIDid";

const SpinningImages = () => {
	return (
		<Grid Row="2" className="jw-img" centered width="100%">
			<Grid.Row>
				<video
					className="video-container video-container-overlay"
					width="90%"
					height="100%"
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
				<Grid.Column className="jw-img">
					<Image src="../../img/Spinning-Records/road.jpeg" size="medium" />
				</Grid.Column>
				<Grid.Column>
					<video
						className="video-container video-container-overlay"
						width="400px"
						height="450px"
						autoPlay
						loop
						muted
					>
						<source
							src="../../img/Spinning-Records/spinning.mp4"
							type="video/mp4"
						/>
					</video>
				</Grid.Column>
				{/* <WhatIDid textAlign="center" verticalAlign="middle" /> */}
				<Grid.Column width={4} Row="4" textAlign="left" verticalAlign="middle">
					<Grid.Row as="h5">What i did </Grid.Row>
					<Grid.Row as="h6">Storyboard </Grid.Row>
					<Grid.Row as="h6">Video Production</Grid.Row>
					{/* <Grid.Row>Visual design</Grid.Row> */}
				</Grid.Column>
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
	);
};

export default SpinningImages;
