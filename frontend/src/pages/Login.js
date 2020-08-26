import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login">
        <h1>Login</h1>

        <form className="form" onSubmit={this.handleFormSubmit}>
          <input
            className="inputLoginSignup"
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            className="inputLoginSignup"
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />

          <input className="input-in" type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);