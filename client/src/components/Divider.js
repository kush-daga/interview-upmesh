/** @format */

import React, { Component } from "react";
import styles from "./styles/divider.module.css";
export default class Divider extends Component {
	render() {
		return (
			<div className={styles.dividerContainer}>
				<div className={styles.dividerDivider}></div>
				<div className={styles.dividerText}>
					<h1> Mengefisienkan waktu usaha anda</h1>
					<p>
						Lorem Ipsum dolor sit amet, consectetur adipis Lorem Ipsum dolor sit amet,
						consectetur adipis
					</p>
					<div className={styles.buttonDivider}>
						<a href="https://google.com">Learn More</a>
					</div>
				</div>
			</div>
		);
	}
}
