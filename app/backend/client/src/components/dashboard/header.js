import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

class Header extends Component {
  render() {
    return (
        <header className="masthead text-white text-center background-dashboard">
            <div className="overlay"></div>
            <div className="background-dashboard">
                <div className="row">
                    
                   
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
