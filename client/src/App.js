/** @format */
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
