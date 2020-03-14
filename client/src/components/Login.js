/** @format */
import React, { Component } from "react";
import axios from "axios";
export default class Login extends React.Component {
	// Using a class based component here because we're accessing DOM refs
	async handleSignIn(e) {
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		let data = {
			username: username,
			password,
		};
		fetch("http://localhost:5000/free_trial", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data),
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				console.log(json);
			});
	}

	render() {
		return (
			<form onSubmit={this.handleSignIn.bind(this)}>
				<h3>Sign in</h3>
				<input type="text" ref="username" placeholder="enter you username" />
				<input type="password" ref="password" placeholder="enter password" />
				<input type="submit" value="Login" />
			</form>
		);
	}
}
