import React from "react";
import { Container, Grid, Image, GridColumn } from "semantic-ui-react";

const Work = () => {
	//../../img/home/slider/axis.png
	return (
		<Container>
			<Grid stackable>
				<Grid.Row columns="2">
					<GridColumn
						width={9}
						// className="col-12 col-md-5 col-lg-5"
						verticalAlign="middle"
					>
						<figure>
							<video
								className="video-container video-container-overlay"
								width="600"
								autoPlay
								loop
								muted
							>
								<source src="../../img/work/follow.mp4" type="video/mp4" />
							</video>{" "}
							<figcaption className="figure-caption text-left">
								SPINNING RECORDS
							</figcaption>
							<figcaption className="figure-caption text-left">
								Music Video
							</figcaption>
						</figure>
					</GridColumn>

					<Grid.Column width={5} verticalAlign="bottom" textAlign="left">
						<figure>
							<Image
								className="img-padding"
								src="../../img/work/jw.jpg"
								size="large"
							/>
							<figcaption className="figure-caption text-center">
								JURASSIC WORLD MINIATURE GAME
							</figcaption>
							<figcaption className="figure-caption text-right">
								Website
							</figcaption>
						</figure>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row columns="2">
					<Grid.Column width={5} verticalAlign="top" textAlign="left">
						<figure>
							<Image src="../../img/work/shootfighter.png" size="small" />
							<figcaption className="figure-caption text-right">
								Shootfighter
							</figcaption>
							<figcaption className="figure-caption text-right">
								Website
							</figcaption>
						</figure>
					</Grid.Column>
					<Grid.Column width={8} verticalAlign="bottom" textAlign="left">
						<figure className="img-padding">
							<Image src="../../img/work/mimisu.png" size="huge" />
							<figcaption className="figure-caption text-right">
								MIMISUCLOTHING
							</figcaption>
							<figcaption className="figure-caption text-right">
								Photography / Fashion Designing
							</figcaption>
						</figure>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<figure className="img__wrap">
						<Image src="../../img/work/axisdigitaal.png" size="small" />
						<figcaption className="figure-caption text-right">
							Axis DIGITAAL
						</figcaption>
						<figcaption className="figure-caption text-right">
							Website / Animated Video
						</figcaption>
						<p class="img__description">Coming soon.</p>
					</figure>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default Work;
