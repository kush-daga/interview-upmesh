/** @format */
import React, { Component } from "react";
import axios from "axios";
export default class Login extends React.Component {
	// Using a class based component here because we're accessing DOM refs
	handleSignIn(e) {
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
        await axios.post("https://localhost:3000/free_trial", {
            username: username,
            password: password,
            age: 18,
        }).then((res) => {
            console.log(res.JSON());
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
