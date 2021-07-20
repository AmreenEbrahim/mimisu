import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "../src/components/home/Home";
import ShootFighter from "./components/shootfighter/ShootFighter";
import JurrasicWorld from "./components/jurrasic_world/JurrasicWorld";
import SpinningRecord from "./components/spinning_records/SpinnigRecord";

import { Header } from "semantic-ui-react";
import Menu from "./components/menu/Menu";
import { Contact } from "./components/layouts/Contact";
import Work from "./components/work/Work";
import WorkNew from "./components/layouts/WorkNew";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header>
					<Navbar />
				</Header>
				<section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shoot-fighter" component={ShootFighter} />
						<Route exact path="/spinning-record" component={SpinningRecord} />

						<Route exact path="/jurrasic_world" component={JurrasicWorld} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/work-new" component={WorkNew} />
						<Route exact path="/work" component={Work} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
};

export default App;
