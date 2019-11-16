import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../home/navbar_home';
import Header from './header_profile';
import Footer from '../dashboard/footer';

class Profile extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <Header />
        {/* <Footer /> */}

      </div>
    );
  }
}

export default Profile;
