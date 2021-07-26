import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";

const HomeGradient = () => {
	return (
		<div className="videocontainer">
			<video
				// className="video-container video-container-overlay"
				width="100%"
				playsinline
				autoPlay
				loop
				muted
			>
				<source
					src="../../img/home/slider/gradient-home.mp4"
					type="video/mp4"
				/>
			</video>

			<Grid.Row>
				<div>
					<Grid className="videocentered" textAlign="left">
						<Grid.Column row="3">
							<Grid.Row>
								<Grid.Row>
									<Image size="medium" src={"../../img/logo/logo-white.png"} />
								</Grid.Row>
								<Grid.Row className="home-menu">HOME</Grid.Row>
								<Grid.Row>
									<p className="intro-inner">
										This is the house of Naomi Solis a Amsterdam-based Visual
										Designer for those who dare. This is the house of Naomi
										Solis a Amsterdam-based Visual Designer for those who dare.
									</p>
								</Grid.Row>
								<Grid.Row>
									<p className="intro-inner">
										I am a creative designer dedicated to new media. By
										constantly pushing boundaries i create memorable designs
										that elevate your brand.
									</p>
								</Grid.Row>
							</Grid.Row>
							<p className="intro-inner">LinkedIn / Instagram</p>
						</Grid.Column>
					</Grid>
				</div>
			</Grid.Row>
		</div>
	);
};

export default HomeGradient;
