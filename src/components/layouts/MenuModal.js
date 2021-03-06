import React from "react";
import { Modal, Header, Grid, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class MyModal extends React.Component {
	confirmClick = (event, data) => {
		// console.log("Passed in Prop Value: " + this.props.valueIntoModal);
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
									<Image
										className="sociallogo"
										href={"https://www.instagram.com/naomisoliss__/d"}
										src={"../../img/logo/instagram.png"}
										size="tiny"
									/>
									<Image
										className="sociallogo"
										href={"https://www.linkedin.com/in/naomi-solis-36218ab2/"}
										src={"../../img/logo/linkedin.png"}
										size="tiny"
									/>
								</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>
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
						<p className="supnumhome">
							<h6 className="text-mob">
								<sup>01</sup>
							</h6>
						</p>
						<p className="menu-mobile">
							<Link to="/" className="text-mob">
								Home
							</Link>
						</p>
						<p className="supnumwork">
							<h6 className="text-mob">
								<sup>02</sup>
							</h6>
						</p>
						<p className="menu-mobile1">
							<Link to="/work" className="text-mob">
								Work
							</Link>
						</p>
						<p className="supnumcontact">
							<h6 className="text-mob">
								<sup>03</sup>
							</h6>
						</p>
						<p className="menu-mobile2">
							<Link to="/contact" className="text-mob">
								Contact
							</Link>
						</p>
					</div>
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
