// import React from "react";
// import "./App.css";

// import Navbar from "./components/Navbar.js";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Private from "./pages/Private";

// import Post from "./components/Post"

// function App() {
//   return (
//     <div className="app">
//       <div className="app__header">
//         <img className="app__headerImage" src="./logo.png" alt="logo" />

//       </div>
//      <h1>holaa</h1>

//      <Post />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import CreatePost from "./components/CreatePost";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />

          <Switch>
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/MyProfile" component={MyProfile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/createpost" component={CreatePost} />
          </Switch>
          <Menu />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
