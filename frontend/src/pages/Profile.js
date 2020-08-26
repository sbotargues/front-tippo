import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";

export class Profile extends Component {
  state = {
    user: {},
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:4000/profile/users/${this.props.match.params.id}`, { withCredentials: true })
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleEdit = () => {
    let showEditForm = !this.state.showEditForm;
    this.setState({ showEditForm });
  };

  render() {
    console.log(this.state);
    const { user } = this.state;
    return (
      <div className="page">
      <div id="edit-form"></div>
        <p>{user.username}</p>
        <p>{user.description}</p>
        <p>{user.link}</p>
        <p>{user.mail}</p>
         
        <div className="posts-profile">
          {user.post
            ? user.post.map((onePost) => {
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
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Profile;