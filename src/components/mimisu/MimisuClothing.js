import React, { Fragment } from "react";
import MimisuIntro from "./MimisuIntro";
import MimisuImages from "./MimisuImages";
import { Container } from "semantic-ui-react";

const MimisuClothing = () => {
	return (
		<Container>
			<MimisuIntro />
			<MimisuImages />
		</Container>
	);
};
export default MimisuClothing;
