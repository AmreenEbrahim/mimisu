import React, { Fragment } from "react";
import { HomeIntro } from "./HomeIntro";
import WhyUs from "./WhyUs";
import Work from "./Work";
import { Container } from "semantic-ui-react";

const Home = () => {
	return (
		<Fragment>
			<HomeIntro />
			<WhyUs />>
			<Work />
		</Fragment>
	);
};

export default Home;
