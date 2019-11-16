import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../home/navbar_home';
import Header from './earning_header';
import Footer from '../dashboard/footer';

class Earning extends Component {
  render() {//building react method that comes inse od react component
    return (//jsx code and can return only a single parent tag
      <div className="dashboard">
        <NavBar />
        <Header />
        {/* <Footer /> */}

      </div>
    );
  }
}

export default Earning;
