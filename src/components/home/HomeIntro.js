import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

export const HomeIntro = () => {
	return (
		<div className="home-background">
			<Container text>
				<Grid>
					<Grid.Column row="2">
						<Grid.Row>
							<Grid.Row>
								<Image size="medium" src={"../../img/logo/logo-white.png"} />
							</Grid.Row>
							<Grid.Row>
								<p className="intro-inner">
									This is the house of Naomi Solis a Amsterdam-based Visual
									Designer for those who dare. This is the house of Naomi Solis
									a Amsterdam-based Visual Designer for those who dare.
								</p>
							</Grid.Row>
							<Grid.Row>
								<p className="intro-inner">
									I am a creative designer dedicated to new media. By constantly
									pushing boundaries i create memorable designs that elevate
									your brand.
								</p>
							</Grid.Row>
						</Grid.Row>
						<p className="intro-inner">LinkedIn / Instagram</p>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
};
