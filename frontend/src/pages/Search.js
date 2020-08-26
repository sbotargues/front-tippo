import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Search extends Component {
  state = {
    username:"",
    user: null
  };

  

  getUser = (username) => {
    axios.get(`http://localhost:4000/search?username=${username}`)
      .then((response) => {
        const data = response.data;
        this.setState({ user: data[0] });
        console.log('Data has been received!!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.getUser(this.state.username)
  };

  render() {

    console.log('State: ', this.state);

    
    return(
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <input 
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <button>Search</button>
        </form>
        <div>{this.state.user?(
          <div>
          <Link to={`/profile/${this.state.user._id}`}>{this.state.user.username}</Link>
          <image src={this.state.user.profilePhoto}> </image>
          </div>
          ):null}</div>
      </div>
    );
    
  }
}


export default Search;