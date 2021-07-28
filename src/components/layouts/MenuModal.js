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
					{/* <Navbar menu={true} /> */}

					<div className="web-hidden videocontainer contact-video">
						<video autoPlay loop muted>
							<source src="../../img/home/menu.mp4" type="video/mp4" />
						</video>
						<Header>
							<label className="menu-page">menu</label>
						</Header>
						<p className="menu-mobile">
							<h6 className="text-mob">01</h6>
							<Link to="/" className="text-mob">
								Home
							</Link>
						</p>
						<p className="menu-mobile1">
							<h6 className="text-mob">02</h6>
							<Link to="/" className="text-mob">
								Work
							</Link>
						</p>
						<p className="menu-mobile2">
							<h6 className="text-mob">03</h6>
							<Link to="/" className="text-mob">
								Contact
							</Link>
						</p>
					</div>
				</Modal.Content>
				<Modal.Content>
					<Header>
						<label className="menu-page">menu</label>
					</Header>
				</Modal.Content>

				<Modal.Content className="web-show">
					<Grid stackable>
						<Grid.Row columns="4" centered className="menu-mob">
							<Grid.Column width={2} className="menu-padding ">
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
							<Grid.Column width={6} className="gradient-shift">
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
								floated="left"
							>
								<Header as="h3" className="menu-contact">
									Contact
								</Header>
								<Header as="h6" color="red" className="menu-sendme ">
									<u>Send me an e-mail</u>
								</Header>
								<Header as="h6" color="red" className="menu-sendme ">
									<u>+1234 56432 2</u>
								</Header>
								<Header as="h6" color="red" className="menu-sendme ">
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
