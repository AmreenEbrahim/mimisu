import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Container } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};
const images = [
	{
		name: "image1",
		src: "../../img/home/slider/jurassic.jpg",
		href: "/jurrasic-world"
	},
	{
		name: "image2",
		src: "../../img/home/slider/axis.png",
		href: "/jurrasic-world"
	},
	{
		name: "image3",
		src: "../../img/home/slider/guilder.png",
		href: "/jurrasic-world"
	},
	{
		name: "image4",
		src: "../../img/home/slider/shootfighter.png",
		href: "/shoot-fighter"
	}
];
const Work = props => (
	<Container>
		<Grid divided="vertically" verticalAlign="middle">
			<Grid.Row columns={2}>
				<Grid.Row columns={2}>
					<Grid.Column className="h1-mywork">My Work</Grid.Column>
					<Grid.Column as="div" width={5}>
						I’m passionate about improving the creative space, empowering
						creators and communities and creating meaningful relationships.{" "}
					</Grid.Column>
					<Grid.Column as="h6" width={5}>
						<Link className="link" to="/work">
							SEE WORK
						</Link>
					</Grid.Column>
				</Grid.Row>

				<Grid.Column>
					<Carousel
						swipeable={true}
						showDots={true}
						arrows={false}
						// partialVisible={true}
						responsive={responsive}
						// means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={1000}
						keyBoardControl={true}
						transitionDuration={500}
						removeArrowOnDeviceType={["tablet", "mobile"]}
						deviceType={props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{images.map(image => (
							<Image
								src={image.src}
								size="large"
								href={image.href}
								target="_blank"
							/>
						))}
					</Carousel>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default Work;
