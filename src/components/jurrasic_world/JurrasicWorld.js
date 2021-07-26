import React from "react";
import JurrasicWorldIntro from "./JurrasicWorldIntro";
import JurrasicWorldImages from "./JurrasicWorldImages";
import { Container } from "semantic-ui-react";

const JurrasicWorld = () => {
	return (
		<div>
			<Container className="stripe" />

			<JurrasicWorldIntro />
			<JurrasicWorldImages />
		</div>
	);
};

export default JurrasicWorld;
