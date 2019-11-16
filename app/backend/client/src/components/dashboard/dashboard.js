import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import Header from '../event/event_header';
import Footer from './footer';

class DashBoard extends Component {
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

export default DashBoard;
