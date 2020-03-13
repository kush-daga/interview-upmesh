/** @format */
import React, { Component } from "react";
import styles from "./styles/footer.module.css";
export default class Footer extends Component {
	render() {
		return (
			<div>
				<div className={styles.footerContainer}>
					<h1>Menyediakan layanan konsultasi pajak dan akuting online</h1>
					<p>
						Lorem ipsum dolor set is a long established fact that a reader will be
						distracted by the readable content of a page when looking at its layout. The
						point of using Lorem Ipsum is that it has a more-or-less normal distribution
					</p>
					<div className={styles.buttonFooter}>
						<a href="https://google.com">Learn More</a>
					</div>
				</div>
			</div>
		);
	}
}
