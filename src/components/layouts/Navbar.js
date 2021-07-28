import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuModal from "../layouts/MenuModal.js";
import { Menu, Image, Button, Container } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
			valueIntoModal: "123456abcdef"
		};
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		return (
			<div>
				<Menu secondary className="menu-align">
					<Menu.Item>
						<Link to="/">
							<Image size="mini" src={"../../img/logo/Final_M.png"} />
						</Link>
					</Menu.Item>

					{!this.props.menu ? (
						<Menu.Menu position="right">
							<Button
								basic
								onClick={() => {
									this.setState({ modalOpen: true });
								}}
							>
								<Image size="mini" src={"../../img/logo/menu.png"} />
							</Button>
							<MenuModal // The invisible modal itself
								key="modal1"
								modalOpen={this.state.modalOpen}
								handleClose={() => {
									this.setState({ modalOpen: false });
								}}
								valueIntoModal={this.state.valueIntoModal}
							/>
						</Menu.Menu>
					) : (
						<Menu.Menu position="right">
							<label>
								{/* <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" /> */}
								<u>Let's Talk</u>
								<Button
									basic
									onClick={() => {
										this.setState(
											{ modalOpen: false },
											console.log("state", this.state.modalOpen)
										);
									}}
								>
									<Image
										className="menu-close-img"
										size="mini"
										src={"../../img/logo/close.png"}
									/>
								</Button>
							</label>
							{/* <Button
								basic
								onClick={() => {
									this.setState(
										{ modalOpen: false },
										console.log("state", this.state.modalOpen)
									);
								}}
							>
								<Image size="mini" src={"../../img/logo/close.png"} />
							</Button> */}
							<MenuModal // The invisible modal itself
								key="modal1"
								modalOpen={this.state.modalOpen}
								handleClose={() => {
									this.setState({ modalOpen: true });
								}}
								valueIntoModal={this.state.valueIntoModal}
							/>
							{/* <Link to="/menu">
						
					</Link> */}
						</Menu.Menu>
					)}
				</Menu>
				{/* <Container className="stripe" /> */}
			</div>
		);
	}
}
// {
// 	color: #fff;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 2000;
//     mix-blend-mode: difference;
// }
