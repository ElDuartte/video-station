import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Perfil from "../pages/Perfil.jsx";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Perfil" component={Perfil} />
			</Switch>
		</HashRouter>
	);
}

export default App;
