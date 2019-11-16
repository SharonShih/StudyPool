import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

class Header extends Component {
  render() {
    return (
      <header className="masthead-1 background-home">
        {/* <div className="side-nav"> */}
          
          <div className="profile-container">
            <h2>Profile</h2>

            <div className="profile-text">First Name</div>
            <div className="profile-box">Sharon</div>

            <div className="profile-text">Last Name</div>
            <div className="profile-box">Shih</div>

            <div className="profile-text">Email Address</div>
            <div className="profile-box">helloworld123@gmail.com</div>

          </div>
        {/* </div> */}
      </header >
    );
  }
}

export default Header;
