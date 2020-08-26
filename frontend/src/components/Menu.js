import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Menu extends Component {
render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='menu'>
      {isLoggedin ? (
          <>
        <Link to={"/"} id='home-btn'>
          <img className="icon" src="./casa.png"></img>
        </Link>

        <Link to={"/createPost"} id='home-btn'>
        <img className="icon" src="./camarawhite.png"></img>
        </Link>

        <Link to={"/myprofile"} id='home-btn'>
        <img className="icon" src="./herramientas-white.png"></img>
        </Link>

        <Link to='/search'>
              <img className="icon" src="./buscar.png"></img>
            </Link>
        </>
        ) : (
          <>
          </>
        )}
        
      </nav>
    );
  }
}

export default withAuth(Menu);