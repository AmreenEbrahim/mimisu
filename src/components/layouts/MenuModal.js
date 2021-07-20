import React from "react";
import { Modal, Header, Button, Icon, Grid } from "semantic-ui-react";
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
				// onClick={this.props.handleClose}
				onClose={this.props.handleClose}
				onOpen={this.props.handleClose}
				open={this.props.modalOpen}
				size="large"
				closeOnEscape={true}
				closeOnRootNodeClick={true}
			>
				<Navbar />
				<Modal.Header>
					<Modal.Actions>
						{/* <Button
							type="button"
							icon="remove"
							labelPosition="right"
							onClick={this.props.handleClose}
						/> */}
					</Modal.Actions>
				</Modal.Header>

				<Modal.Content>
					<Grid>
						<Grid.Row columns="3">
							<Grid.Column width={4}>
								<Header as="h1" color="white" onClick={this.props.handleClose}>
									<Link to="/" className="link">
										Home
									</Link>
								</Header>
								<Header as="h1" onClick={this.props.handleClose}>
									<Link to="/work" className="link">
										Work
									</Link>
								</Header>
								<Header onClick={this.props.handleClose}>
									<Link to="/contact" className="link">
										Contact
									</Link>
								</Header>
							</Grid.Column>
							<Grid.Column width={6}></Grid.Column>

							<Grid.Column width={4} textAlign="left" floated="right">
								<Header as="h1">Contact</Header>
								<Header as="h6" color="red">
									Send me an e-mail
								</Header>
								<Header as="h6" color="red">
									+1234 56432 2
								</Header>
								<Header as="h6" color="red">
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
