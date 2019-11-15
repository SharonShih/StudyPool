import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light navbar-expand bg-light navigation-clean">
          <Route>
            <div className="container">
              <Link to="/" className="navbar-brand" role="button">StockU</Link>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <Link to="/signin" className="btn btn-primary ml-auto" role="button">Sign In</Link>
                </div>
            </div>
          </Route>
        </nav>
    );
  }
}

export default NavBar;
