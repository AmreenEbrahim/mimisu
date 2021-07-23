import React from "react";
import { Container, Image, Item, Label, Grid } from "semantic-ui-react";
import me from "../../img/me.jpeg";

const WhyUs = () => {
	return (
		<Container className="ui.container ">
			<Grid stackable>
				<Grid.Row columns="3">
					<Grid.Column width={6}>
						<Image
							size="large"
							href="http://google.com"
							target="_blank"
							src={me}
						/>
					</Grid.Column>
					<Grid.Column rows="4" verticalAlign="middle">
						<Grid.Row as="h6">WHY WORK AVEC MOI</Grid.Row>
						<Grid.Row as="h2">A little bit about me </Grid.Row>
						<Grid.Row>
							My talents lie in taking brands to the next level by enhancing
							their identity and digital footprint. I like to take a fresh
							approach to every project and strive to create something memorable
							in all i create.
						</Grid.Row>
						<Grid.Row>
							<Grid columns="2">
								<Grid.Column>
									<Grid.Row>
										<Label
											basic
											// color="green"
										>
											Visual design
										</Label>
									</Grid.Row>
									<Grid.Row>
										<Label
											basic
											// color="pink"
										>
											Photography
										</Label>
									</Grid.Row>
								</Grid.Column>
								<Grid.Column>
									<Grid.Row>
										<Label
											basic
											// color="yellow"
										>
											Videography
										</Label>
									</Grid.Row>
									<Grid.Row>
										<Label
											basic
											//  color="blue"
										>
											fRONT-END (learning)
										</Label>
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
