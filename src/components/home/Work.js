import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import me from "../../img/me.jpeg";
const src1 = "../../img/me.jpeg";

const images = [
	{
		name: "image1",
		src: "../../img/home/slider/jurassic.jpg"
	},
	{
		name: "image1",
		src: "../../img/home/slider/axis.png"
	},
	{
		name: "image1",
		src: "../../img/home/slider/guilder.png"
	},
	{
		name: "image1",
		src: "../../img/home/slider/shootfighter.png"
	}
];
const Work = () => (
	<Container>
		<Grid divided="vertically">
			<Grid.Row columns={2}>
				<Grid.Row columns={2}>
					<Grid.Column as="h1">My Work</Grid.Column>
					<Grid.Column as="div">
						I’m passionate about improving the creative space, empowering
						creators and communities and creating meaningful relationships.{" "}
					</Grid.Column>
				</Grid.Row>

				<Grid.Column>
					<Carousel autoPlay={true} width="80%" infiniteLoop={true}>
						{images.map(image => (
							<div>
								<Image
									src={image.src}
									size="large"
									href="http://google.com"
									target="_blank"
								/>
							</div>
						))}

						{/* <div>
							<Image
								src={me}
								size="large"
								href="http://google.com"
								target="_blank"
							/>
						</div> */}
						{/* <div>
							<Image
								src={me}
								size="large"
								href="http://google.com"
								target="_blank"
							/>
						</div> */}
					</Carousel>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default Work;
