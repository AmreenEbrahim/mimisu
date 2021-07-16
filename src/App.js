import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "../src/components/home/Home";
import ShootFighter from "./components/shootfighter/ShootFighter";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shoot-fighter" component={ShootFighter} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
};

export default App;
