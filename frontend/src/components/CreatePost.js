import React, { Component } from "react";
import axios from "axios";
import service from '../api/service';

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
  
    handleFileUpload = e => {
      console.log("el archivo que se subira es:", e.target.files[0])

      const uploadData = new FormData()

      uploadData.append("postPhoto", e.target.files[0]);

      service.handleUpload(uploadData)
      .then(response => {
        console.log('response is: ', response);

        this.setState({postPhoto: response.secure_url})
      })
      .catch(err=>{
        console.log("Error uploading the file: ", err)
      })
    }

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
              <input class="input-in"
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} 
              /> 
              <input class="input-in" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
    
}

export default CreatePost;
