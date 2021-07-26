import React from "react";
import SpinningIntro from "./SpinningIntro";
import SpinningImages from "./SpinningImages";
import { Container } from "semantic-ui-react";

const SpinningRecord = () => {
	return (
		<div>
			<Container className="stripe" />
			<SpinningIntro />
			<SpinningImages />
		</div>
	);
};

export default SpinningRecord;
