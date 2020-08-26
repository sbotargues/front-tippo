import React, { Component } from "react";
import axios from 'axios';

export class EditProfile extends Component {
  state = {
    username: "",
    description: "",
    link: "",
    profilePhoto: "",
    mail: "",
  };

  componentDidMount(){
      this.setState({
        username: this.props.user.username,
        description: this.props.user.description,
        link: this.props.user.link,
        profilePhoto: this.props.user.profilePhoto,
        mail: this.props.user.mail
      })
  }

  handleChange = (event) => {
    const{name,value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
        axios.post("http://localhost:4000/profile/edit", this.state, {withCredentials: true})
        .then((response)=>{
          this.props.closeForm()
        })
        .catch((err) => {console.log(err)
       })
       
  }
  render() {
    return (
      <div className="form-edit">
        <form onSubmit={this.handleSubmit}>
        <div className="form-components" >
          <label>username</label>
          <input className="input-form"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          </div>
          <div className="form-components" >
          <label>description</label>
          <input className="input-form"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          </div>
          <div className="form-components" >
          <label>link</label>
          <input className="input-form"
            value={this.state.link}
            name="link"
            onChange={this.handleChange}
          />
          </div>
          <div className="form-components" >
          <label>profilePhoto</label>
          <input className="input-form"
            value={this.state.profilePhoto}
            name="profilePhoto"
            onChange={this.handleChange}
          />
          </div>
          <div className="form-components" >
          <label>mail</label>
          <input className="input-form"
            value={this.state.mail}
            name="mail"
            onChange={this.handleChange}
          />
          </div>
          <div className="form-components" >
          <button>save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
