import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar_login';
import Header from './header_login';
import Footer from '../dashboard/footer';


class SignIn extends Component {
  render() {
    return (
        <div className="dashboard">
          <NavBar />
          <Header />
          <Footer />
        </div>
    );
  }
}

export default SignIn;
