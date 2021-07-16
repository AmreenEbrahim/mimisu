import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Image } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item>
					<Link to="/">
						<Image size="mini" src={"../../img/logo/Final_M.png"} />
					</Link>
				</Menu.Item>
				{/* <Menu.Item
					name="home"
					active={activeItem === "home"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="messages"
					active={activeItem === "messages"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="friends"
					active={activeItem === "friends"}
					onClick={this.handleItemClick}
				/> */}
				<Menu.Menu position="right">
					<Link to="/menu">
						<Image size="mini" src={"../../img/logo/menu.png"} />
					</Link>
					{/* <Menu.Item
						name="logout"
						active={activeItem === "logout"}
						onClick={this.handleItemClick}
					/> */}
				</Menu.Menu>
			</Menu>
		);
	}
}
