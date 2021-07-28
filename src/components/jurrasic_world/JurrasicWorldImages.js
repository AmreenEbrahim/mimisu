import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";

const JurrasicWorldImages = () => {
	const images = [
		{
			name: "image1",

			src: "../../img/JurassicWorld/about.jpg"
		},
		{
			name: "image1",
			src: "../../img/JurassicWorld/Contains.png",
			desc:
				"The website also has a shopping part in which the visitor can buy different board games, collector items and much more. "
		},
		{
			name: "image1",
			src: "../../img/JurassicWorld/home.png"
		},
		{
			name: "image1",
			src: "../../img/JurassicWorld/productdetail.png"
		}
	];
	// const home = ../img/shootfighters/home.png";
	return (
		<Grid Row="3" centered width="100%" stackable>
			{images.map(image => (
				<Grid.Row>
					{image.desc ? (
						<div className="jw-img">
							<Grid>
								<Grid.Row columns="2">
									<Grid.Column width={9}>
										<Image size="massive" src={image.src} />
									</Grid.Column>
									<Grid.Column
										textAlign="left"
										width={4}
										verticalAlign="middle"
									>
										<Grid.Row className="img-desc wat" verticalAlign="middle">
											{image.desc}{" "}
										</Grid.Row>
										{/* <Grid.Row>UI design UX </Grid.Row>
										<Grid.Row>Design</Grid.Row>
										<Grid.Row>Visual design</Grid.Row> */}
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</div>
					) : (
						<Container>
							<Grid>
								<Grid.Row>
									<Image size="massive" src={image.src} />
								</Grid.Row>
							</Grid>
						</Container>
					)}
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
	);
};
// const PropsBox = styled.div(props => ({
// 	background: props.background,
// 	height: "50px",
// 	width: "50px"
// }));

export default JurrasicWorldImages;
