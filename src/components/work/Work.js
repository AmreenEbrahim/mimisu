import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, GridColumn } from "semantic-ui-react";

const Work = () => {
	//../../img/home/slider/axis.png
	return (
		// <Container>
		<Grid stackable>
			<Grid.Row columns="2">
				<GridColumn
					width={9}
					// className="col-12 col-md-5 col-lg-5"
					verticalAlign="middle"
				>
					<figure>
						<Link
							to="/spinning-record"
							// target="blank"
						>
							<video
								className="work-video video-container video-container-overlay"
								autoPlay
								loop
								muted
							>
								<source src="../../img/work/follow.mp4" type="video/mp4" />
							</video>{" "}
						</Link>
						<figcaption className="figure-caption text-left">
							SPINNING RECORDS
						</figcaption>
						<figcaption className="figure-caption text-left">
							Music Video
						</figcaption>
					</figure>
				</GridColumn>

				<Grid.Column width={5} verticalAlign="bottom" textAlign="right">
					<figure className="img-padding">
						<Image
							src="../../img/work/jw.jpg"
							size="medium"
							href="/jurrasic-world"
						/>
						<figcaption className="figure-caption text-center">
							JURASSIC WORLD MINIATURE GAME
						</figcaption>
						<figcaption className="figure-caption text-center">
							Website
						</figcaption>
					</figure>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row columns="2">
				<Grid.Column width={5} verticalAlign="top" textAlign="left">
					<figure>
						<Image
							src="../../img/work/shootfighter.png"
							href="/shoot-fighter"
							// target="blank"
							size="small"
						/>
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
						<Image
							src="../../img/work/mimisu.png"
							size="large"
							href="/mimisu-clothing"
							// target="blank"
						/>
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
						AXIS DIGITAAL
					</figcaption>
					<figcaption className="figure-caption text-right">
						Website / Animated Video
					</figcaption>
					<p class="img__description">Coming soon.</p>
				</figure>
			</Grid.Row>
		</Grid>
		// </Container>
	);
};

export default Work;
