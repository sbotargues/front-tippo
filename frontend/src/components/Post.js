import React from "react";
import "../Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Sergi"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      {/* {header -> avatar + username} */}

      <img className="post__image" src="./fotomeva.jpg"></img>

      {/* {image} */}

      <h4 className="post__text">
        <strong>Pau</strong>WOW Amazing!!
      </h4>
      {/* {username + caption} */}
    </div>
  );
};

export default Post;
