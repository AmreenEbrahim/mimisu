import React from "react";
import { Container, Image, Item, Label, Grid } from "semantic-ui-react";
import me from "../../img/me.jpeg";

const WhyUs = () => {
	return (
		<Container className=".ui.container ">
			<Item.Group>
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
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
			<Image />
		</Container>
	);
};

export default WhyUs;
