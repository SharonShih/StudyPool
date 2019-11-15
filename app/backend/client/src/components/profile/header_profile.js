import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

class Header extends Component {
  render() {
    return (
      <header className="masthead-1 background-home">
        <div className="side-nav">
          <Route>
            <Link to="/profile" className="side-nav-item side-nav-item-selected" role="button">My Profile</Link>
            <Link to="/earning" className="side-nav-item" role="button">My Earning</Link>
            <Link to="/fav" className="side-nav-item" role="button">Favorite List</Link>
          </Route>
          <div className="profile-container">
            <h2>Profile</h2>

            <div className="profile-text">First Name</div>
            <div className="profile-box">Sharon</div>

            <div className="profile-text">Last Name</div>
            <div className="profile-box">Shih</div>

            <div className="profile-text">Email Address</div>
            <div className="profile-box">helloworld123@gmail.com</div>

          </div>
        </div>
      </header >
    );
  }
}

export default Header;
