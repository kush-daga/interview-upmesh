/** @format */

import React, { Component } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

export default class Home extends Component {
	render() {
		return (
			<div>
				<Hero />
				<Features />
				<Divider />
				<Footer />
			</div>
		);
	}
}
