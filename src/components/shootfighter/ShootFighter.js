import React from "react";
import ShootFighterIntro from "./ShootFighterIntro";
import ShootFighterImages from "./ShootFighterImages";
import { Container } from "semantic-ui-react";

const ShootFighter = () => {
	return (
		<div>
			<Container className="stripe" />
			<ShootFighterIntro />
			<ShootFighterImages />
		</div>
	);
};

export default ShootFighter;
