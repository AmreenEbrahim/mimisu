import React from "react";
import { Container, Grid, Image, GridColumn, GridRow } from "semantic-ui-react";

const WorkNew = () => {
	return (
		<Container>
			<Grid>
				<GridRow columns="4">
					<Grid.Column className="col-md-1"></Grid.Column>
					<Grid.Column className="col-12 col-md-5 col-lg-5">
						<figure>
							{/* <video autoPlay loop muted>
									<source src="../../img/work/follow.mp4" type="video/mp4" />
								</video>{" "} */}
							<figcaption className="figure-caption text-left">
								SPINNING RECORDS
							</figcaption>
							<figcaption className="figure-caption text-left">
								Music Video
							</figcaption>
						</figure>
					</Grid.Column>
					<Grid.Column className="col-sm-1"></Grid.Column>
					<Grid.Column className="col-md-4 col-lg-4">
						<figure>
							<Image src="../../img/jw.jpg" size="large" />
							<figcaption className="figure-caption text-right">
								JURASSIC WORLD MINIATURE GAME
							</figcaption>
							<figcaption className="figure-caption text-right">
								Website
							</figcaption>
						</figure>
					</Grid.Column>
				</GridRow>
				<GridRow>
					<GridColumn></GridColumn>
					<GridColumn></GridColumn>
					<GridColumn></GridColumn>
					<GridColumn></GridColumn>
				</GridRow>
				<GridRow>
					<GridColumn></GridColumn>

					<GridColumn></GridColumn>
				</GridRow>
			</Grid>
		</Container>
	);
};

export default WorkNew;
