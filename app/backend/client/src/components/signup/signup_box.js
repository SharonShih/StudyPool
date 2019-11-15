import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../dashboard/navbar';
import Header from './header_signup';
import Footer from '../dashboard/footer';

class SignUp extends Component {
  //showUsers = user => <div key={user.User_id}>{user.User_name}{user.User_email}</div>
  render() {//building react method that comes inse od react component
    return (//jsx code and can return only a single parent tag
      <div className="dashboard">
        <NavBar />
        <Header />
        <Footer />

      </div>
    );
  }
}

export default SignUp;
