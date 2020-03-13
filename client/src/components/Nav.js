/** @format */
import React, { Component } from "react";
import styles from "./styles/nav.module.css";
import { Link } from "react-router-dom";
export default class Nav extends Component {
	render() {
		return (
			<div>
				<div className={styles.navContainer}>
					<ul className={styles.navLinks}>
						<li className={styles.navLink}>
							<a className={styles.active}>
								<Link to="/">Home</Link>
							</a>
						</li>
						<li className={styles.navLink}>
							<a>Product</a>
						</li>
						<li className={styles.navLink}>
							<a>Partner</a>
						</li>
						<li className={styles.navLink}>
							<a>Support</a>
						</li>
						<li className={styles.navLink}>
							<a className={styles.LoginButton}>
								<Link to="/login">LOGIN</Link>
							</a>
						</li>
						<li className={styles.navLink}>
							<a className={styles.trialButton}>Free Trial</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
