/** @format */

import React, { Component } from "react";
import styles from "./styles/features.module.css";
import ImageMain from "../img/homepage.png";
import Icon from "../img/exam.svg";
export default class Features extends Component {
	render() {
		return (
			<div className={styles.featuresContainer}>
				<h1>Real-Time Reporting</h1>
				<h3>lorem ipsum dolor sit amet lorem lorem lkorem </h3>
				<img src={ImageMain}></img>
				<div className={styles.featuresGrid1}>
					<div className={styles.featuresGrid1Text}>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid1Text}>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid1Text}>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
				</div>
				<h1 className={styles.secondHeading}>Modul Vobiz</h1>
				<div className={styles.featuresGrid2}>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
					<div className={styles.featuresGrid2Text}>
						<img src={Icon} height="50px" style={{ marginBottom: "10px" }}></img>
						<h2>Simple and User Friendly</h2>
						<p>Lorem ipsum dolor sit am lorem ipsum</p>
					</div>
				</div>
				<div className={styles.buttonFeatures}>
					<a href="https://google.com">Learn More</a>
				</div>
			</div>
		);
	}
}
