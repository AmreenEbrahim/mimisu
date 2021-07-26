import React, { Fragment } from "react";
// import { HomeIntro } from "./HomeIntro";
import WhyUs from "./WhyUs";
import Work from "./Work";
import HomeGradient from "./HomeGradient";

const Home = () => {
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
