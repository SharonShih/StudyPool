import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <header className="masthead-1 background-home">
          <div className="side-nav">
            <Route>
              <Link to="/profile" className="side-nav-item" role="button">My Profile</Link>
              <Link to="/earning" className="side-nav-item side-nav-item-selected" role="button">My Earning</Link>
              <Link to="/" className="side-nav-item" role="button">Favorite List</Link>
            </Route>

          <div className="profile-container">
            <h2>Manage Earning</h2>
            <div className="input-text">Stock Name
              <input className="input-box" placeholder="Ex. APPL, GOOGL"></input>
            </div>
            <div className="input-text">Stock Cost
              <input className="input-box" placeholder="Ex. $102.32"></input>
            </div>
            <div className="input-text">Stock Equity
              <input className="input-box" placeholder="Ex. $102.32"></input>
            </div>
            <div className="input-text">Amount of Share
              <input className="input-box" placeholder="Ex. 1, 5, 10"></input>
            </div>
            <button className="button-add" type="submit">Submit</button>
          </div>


        </div>


      </header >
    );
  }
}

export default Header;
