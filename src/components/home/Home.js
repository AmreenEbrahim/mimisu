import React, { Fragment } from "react";
// import { HomeIntro } from "./HomeIntro";
import WhyUs from "./WhyUs";
import Work from "./Work";
import HomeGradient from "./HomeGradient";

const Home = props => {
	// console.log("router name", props.match.path);
	return (
		<Fragment>
			<HomeGradient />
			{/* <HomeIntro /> */}
			<WhyUs />
			<Work />
		</Fragment>
	);
};

export default Home;
