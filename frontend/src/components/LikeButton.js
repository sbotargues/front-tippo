import React, { Component } from "react";
import axios from 'axios';

class LikeButton extends React.Component {
    state = {
        like:""
    }

    handleSubmit = (event) => {
        axios
          .post("http://localhost:4000/home/likes/:id", this.state, {
            withCredentials: true,
          })
          .then((response) => {
            this.props.closeForm();
          })
          .catch((err) => {
            console.log(err);
          });
      };

  render() {
    return <button onClick ={ () => this.handleSubmit()} className="like" ><img className="icon" src="corazonwhite.png" ></img></button>;
  }
}

export default LikeButton;
