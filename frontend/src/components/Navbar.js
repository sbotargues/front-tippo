import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='navbar'>
        {isLoggedin ? (
          <>
            <p className='navbar-user'>username {user.username}</p>
            <Link>
            <button className='navbar-button' onClick={logout}>
              Logout
            </button>
            </Link>
            
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
            
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);