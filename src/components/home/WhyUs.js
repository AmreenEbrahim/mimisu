import React from "react";
import { Container, Image, Label, Grid } from "semantic-ui-react";
import me from "../../img/me.jpeg";

const WhyUs = () => {
	return (
		<Container>
			<Grid stackable>
				<Grid.Row columns="2">
					<Grid.Column width={6} floated="left">
						<Image size="large" src={me} />
					</Grid.Column>
					<Grid.Column rows="4" width={9} verticalAlign="bottom" floated="left">
						<Grid.Row as="h6">WHY WORK AVEC MOI</Grid.Row>
						<Grid.Row as="h2">A little bit about me </Grid.Row>
						<Grid.Row as="div" className="whyuswidth">
							My talents lie in taking brands to the next level by enhancing
							their identity and digital footprint. I like to take a fresh
							approach to every project and strive to create something memorable
							in all i create.
						</Grid.Row>
						<Grid.Row>
							<Grid>
								<Grid.Column className="whyus-mob" width={6}>
									<Grid.Row className="whyus">
										<Label basic>Visual design</Label>
									</Grid.Row>
									<Grid.Row>
										<Label basic>Photography</Label>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column width={7}>
									<Grid.Row className="whyus">
										<Label basic>Videography</Label>
									</Grid.Row>
									<Grid.Row>
										<Label basic>FRONT-END (learning)</Label>
									</Grid.Row>
								</Grid.Column>
							</Grid>
						</Grid.Row>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			{/* <Item.Group>
				<Item>
					<Item.Image
						size="medium"
						href="http://google.com"
						target="_blank"
						src={me}
					/>

					<Item.Content>
						<Item.Meta>WHY WORK AVEC MOI</Item.Meta>
						<Item.Header as="h1">A llittle bit about me</Item.Header>
						<Item.Description>
							My talents lie in taking brands to the next level by enhancing
							their identity and digital footprint. I like to take a fresh
							approach to every project and strive to create something memorable
							in all i create.
						</Item.Description>
						<Item.Description>
							<Grid columns="2">
								<Grid.Column>
									<Grid.Row>
										<Label basic color="green">
											Visual design
										</Label>
									</Grid.Row>
									<Grid.Row>
										<Label basic color="pink">
											Photography
										</Label>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<Label basic color="yellow">
											Videography
										</Label>
									</Grid.Row>
									<Grid.Row>
										<Label basic color="blue">
											fRONT-END (learning)
										</Label>
									</Grid.Row>
								</Grid.Column>
							</Grid>

							{/* <Label icon='globe' content='Additional Languages' /> */}
			{/* </Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
			<Image /> */}{" "}
		</Container>
	);
};

export default WhyUs;
