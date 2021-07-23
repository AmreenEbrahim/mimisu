import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "../src/components/home/Home";
import ShootFighter from "./components/shootfighter/ShootFighter";
import JurrasicWorld from "./components/jurrasic_world/JurrasicWorld";
import SpinningRecord from "./components/spinning_records/SpinnigRecord";
import MimisuClothing from "./components/mimisu/MimisuClothing";

import { Contact } from "./components/layouts/Contact";
import Work from "./components/work/Work";

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shoot-fighter" component={ShootFighter} />
						<Route exact path="/spinning-record" component={SpinningRecord} />
						<Route exact path="/jurrasic-world" component={JurrasicWorld} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/work" component={Work} />
						<Route exact path="/mimisu-clothing" component={MimisuClothing} />
					</Switch>
				</section>
			</div>
		</Router>
	);
};

export default App;
