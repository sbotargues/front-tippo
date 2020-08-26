import React, { Component } from "react";
import axios from "axios";
import EditProfile from "../components/EditProfile";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

export class MyProfile extends Component {
  state = {
    user: {},
    showEditForm: false,
    posts: []
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/profile/myprofile", { withCredentials: true })
      .then((response) => {
        this.setState({ posts: response.data.post, user: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleEdit = () => {
    let showEditForm = !this.state.showEditForm;
    this.setState({ showEditForm });
  };

  deletePost = (postId, index) => {
    axios.delete(`http://localhost:4000/post/delete/${postId}`, { withCredentials: true })
    .then((deletedPost)=>{
      const copyArray = [...this.state.posts] 
      copyArray.splice(index, 1)
      this.setState({posts: copyArray})
    })
    .catch((err) => {
      console.log(err);
    });
  }


  render() {
    console.log(this.state);
    const { posts, user } = this.state;
    return (
      <div className="page">
      <div id="edit-form"></div>
        <p>{user.username}</p>
        <p>{user.description}</p>
        <p>{user.link}</p>
        <p>{user.mail}</p>
        {!this.state.showEditForm ? (
          <button className="form-edit" onClick={this.toggleEdit}>edit</button>
        ) : (
          <EditProfile user={user} closeForm={this.toggleEdit} />
        )}
        
         
        <div className="posts-profile">
          {user.post
            ? posts.map((onePost, index) => {
                return (
                  <div className="post">
                    <div className="post__header">
                      <Avatar
                        className="post__avatar"
                        alt={user.username}
                        src="/static/images/avatar/1.jpg"
                      />
                      <h3>{user.username}</h3>
                    </div>
                    <img className="post__image" src={onePost.postPhoto}></img>
                    <p>{onePost.postDescription}</p>
                    <h4 className="post__text"><strong>{user.username}</strong>{user.comment}</h4>
                    <button className="delete" onClick={()=>this.deletePost(onePost._id, index)}>X</button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default MyProfile;
