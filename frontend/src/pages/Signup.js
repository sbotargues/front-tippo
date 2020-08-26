import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup">
        <h1>Sign Up</h1>

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

          <input className="input-in" type='submit' value='Signup' />
        </form>

        <p className="already">Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);