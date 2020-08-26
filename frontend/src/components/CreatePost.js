import React, { Component } from "react";
import axios from "axios";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postPhoto: "",
      postDescription: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const postPhoto = this.state.postPhoto;
    const postDescription = this.state.postDescription;

      axios
        .post(
          "http://localhost:4000/post/publish",
          { postPhoto, postDescription},
          { withCredentials: true }
        )
        .then((response) => {
          this.setState({post: response._id});
        })
        .catch(error => console.log(error));
    };

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
  render() {
    console.log('State: ', this.state);
    return (
      <div>
        <h1>Add a Post</h1>
        <div className="crearpost">
          <form onSubmit={this.handleFormSubmit}>
            <div className="">
              <input
                type="text"
                name="postDescription"
                value={this.state.postDescription}
                onChange={(e) => this.handleChange(e)}
                placeholder="Description"
              />
              <input
                type="text"
                name="postPhoto"
                value={this.state.postPhoto}
                onChange={(e) => this.handleChange(e)}
                placeholder="Photo Link"
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
    
}

export default CreatePost;
