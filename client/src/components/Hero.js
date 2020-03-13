/** @format */
import React, { Component } from "react";
import styles from "./styles/hero.module.css";
import LaptopImage from "../img/default_11423glare.png";
import AppStore from "../img/imgbin-app-store-google-play-app-store-X6KZA6U2DVzzqx128G2RxG1UH.jpg";
import playStore from "../img/en_badge_web_generic.png";
export default class Hero extends Component {
	render() {
		return (
			<div className={styles.heroContainer}>
				<div className={styles.heroContent}>
					<div className={styles.heroContentText}>
						<h1>#1 Online Accounting Software In Indonesia </h1>
						<h3>One Stop Solution Anytime Anywhere</h3>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
							<li>Lorem ipsum dolor sit ametg</li>
							<li>Lorem ipsum dolor sit adipiscing</li>
						</ul>
						<div className={styles.heroButtons}>
							<a href="https://google.com">Free 60 Days Trial</a>
							<img src={AppStore}></img>
							<img src={playStore}></img>
						</div>
					</div>
					<div className={styles.heroContentImage}>
						<img src={LaptopImage}></img>
					</div>
				</div>
			</div>
		);
	}
}
