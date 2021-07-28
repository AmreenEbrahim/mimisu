import React from "react";
import { Modal, Header, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class MyModal extends React.Component {
	confirmClick = (event, data) => {
		console.log("Passed in Prop Value: " + this.props.valueIntoModal);
		this.props.handleClose();
	};

	render() {
		return (
			<Modal
				basic
				onClick={this.props.handleClose}
				onClose={this.props.handleClose}
				onOpen={this.props.handleClose}
				open={this.props.modalOpen}
				size="fullscreen"
				closeOnEscape={true}
				closeOnRootNodeClick={true}
				centered={false}
			>
				<Modal.Content>
					<Navbar menu={true} />
				</Modal.Content>
				<Modal.Content>
					<Header>
						<label className="menu-page">menu</label>
					</Header>
				</Modal.Content>

				<Modal.Content>
					<Grid stackable>
						<Grid.Row columns="4">
							<Grid.Column width={3} className="menu-padding menu-container">
								<Header as="h1" onClick={this.props.handleClose}>
									<Link to="/" className="link">
										Home
									</Link>
								</Header>
								<Header as="h1" onClick={this.props.handleClose}>
									<Link to="/work" className="link">
										Work
									</Link>
								</Header>
								<Header as="h1" onClick={this.props.handleClose}>
									<Link to="/contact" className="link">
										Contact
									</Link>
								</Header>
							</Grid.Column>
							<Grid.Column className="gradient-shift">
								<video
									width="auto"
									className="menu-eclipse"
									// className=" video-container video-container-overlay"
									autoPlay
									loop
									muted
								>
									<source src="../../img/menu.mp4" type="video/mp4" />
								</video>
							</Grid.Column>

							<Grid.Column
								textAlign="left"
								verticalAlign="middle"
								floated="right"
							>
								<Header as="h3" className="menu-contact">
									Contact
								</Header>
								<Header as="h6" color="red" className="menu-sendme">
									<u>Send me an e-mail</u>
								</Header>
								<Header as="h6" color="red" className="menu-sendme">
									<u>+1234 56432 2</u>
								</Header>
								<Header as="h6" color="red" className="menu-sendme">
									social links
								</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Modal.Content>
			</Modal>
		);
	}
}

MyModal.propTypes = {
	modalOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	valueIntoModal: PropTypes.string.isRequired
};

export default MyModal;
