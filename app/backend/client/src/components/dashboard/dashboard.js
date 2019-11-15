import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import Header from './header';
import Desc from './desc';
import Footer from './footer';

class DashBoard extends Component {
  render() {
    return (
        <div className="dashboard">
            <NavBar />
            <Header />
            <Desc />
            <Footer />
        </div>
    );
  }
}

export default DashBoard;
