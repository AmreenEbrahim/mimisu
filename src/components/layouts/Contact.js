import React from "react";
// import { Grid, Image, Container } from "semantic-ui-react";

export const Contact = () => {
	return (
		<div className="videocontainer contact-video">
			<video
				// className="  video-container video-container-overlay"
				// playsinline
				autoPlay
				loop
				muted
			>
				<source
					src="../../img/home/slider/gradient-home.mp4"
					type="video/mp4"
				/>
			</video>
			<p className="contact-p">Hi, let’s talk Drop me a line</p>
			<span>MIMIZUCONTACT@GMAIL.COM </span>
			<span className="contact-add">Naomi Solis Based in Amsterdam x x x</span>
			<span className="contact-social">LinkedIn / Instagram</span>

			{/* <div>
				<Grid stackable className="videocentered" textAlign="left">
					<Grid.Column row="3">
						<Grid.Row>
							<Grid.Row></Grid.Row>
						</Grid.Row>
						<p className="intro-inner">LinkedIn / Instagram</p>
					</Grid.Column>
				</Grid>
			</div> */}
		</div>
	);
};
