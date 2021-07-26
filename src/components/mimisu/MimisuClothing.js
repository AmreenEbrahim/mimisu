import React from "react";
import MimisuIntro from "./MimisuIntro";
import MimisuImages from "./MimisuImages";
import { Container } from "semantic-ui-react";

const MimisuClothing = () => {
	return (
		<div>
			<Container className="stripe" />
			<Container>
				<MimisuIntro />
				<MimisuImages />
			</Container>
		</div>
	);
};
export default MimisuClothing;
