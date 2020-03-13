/** @format */
import React, { Component } from "react";
import styles from "./styles/nav.module.css";
export default class Nav extends Component {
	render() {
		return (
			<div>
				<div className={styles.navContainer}>
					<ul className={styles.navLinks}>
						<li className={styles.navLink}>
							<a href="https://github.com" className={styles.active}>
								Home
							</a>
						</li>
						<li className={styles.navLink}>
							<a href="https://github.com">Product</a>
						</li>
						<li className={styles.navLink}>
							<a href="https://github.com">Partner</a>
						</li>
						<li className={styles.navLink}>
							<a href="https://github.com">Support</a>
						</li>
						<li className={styles.navLink}>
							<a href="https://github.com" className={styles.LoginButton}>
								LOGIN
							</a>
						</li>
						<li className={styles.navLink}>
							<a href="https://github.com" className={styles.trialButton}>
								Free Trial
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
