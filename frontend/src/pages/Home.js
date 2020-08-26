import React, {Component} from "react";
import Post from '../components/Post'
import axios from 'axios';
import Avatar from "@material-ui/core/Avatar";
import LikeButton from '../components/LikeButton'

class Home extends Component {
  state = {posts: []};

  componentDidMount = () => {
   axios.get("http://localhost:4000/home/lastPost", {withCredentials: true})
   .then((response)=>{
     this.setState({posts: response.data})
     console.log(response)
   })
   .catch((err) => {console.log(err)
  })
  }

  render (){
    
    return(
     <div className="page">
      <div className="posts-profile">
      {this.state.posts[0] && this.state.posts.map(post => {
       return (<div class="post">
       <div className="post__header">
                      <Avatar
                        className="post__avatar"
                        alt={post.user.username}
                        src="/static/images/avatar/1.jpg"
                      />
                      <h3>{post.user.username}</h3>
                    </div>
       <img className="post__image" src={post.postPhoto}></img>
        <p>{post.postDescription}</p>
        <LikeButton />
        <h4 className="post__text"><strong>{post.username}</strong>{post.comment}</h4>
        </div>)
      })}
  
      </div>
      </div>
    )
  }
  
}

export default Home