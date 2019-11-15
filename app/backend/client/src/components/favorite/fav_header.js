import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fav.css';

class Header extends Component {
  render() {
    return (
      <header className="masthead-1 background-home">
        <div className="side-nav">
          <Route>
            <Link to="/profile" className="side-nav-item" role="button">My Profile</Link>
            <Link to="/earning" className="side-nav-item" role="button">My Earning</Link>
            <Link to="/fav" className="side-nav-item side-nav-item-selected" role="button">Favorite List</Link>

            <div className="profile-container">
              <h2>My Favorite List</h2>

              <table className="table">
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Volumn</th>
                    <th>52Wk High</th>
                    <th>52Wk Low</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TSLA</td>
                    <td>$ 346.49</td>
                    <td>$ 353.84</td>
                    <td>$ 343.00</td>
                    <td>6.47M</td>
                    <td>$ 379.49</td>
                    <td>$ 176.99</td>
                    <td><button type="submit" className="button-delete">Delete</button></td>
                  </tr>
                  <tr>
                    <td>TSLA</td>
                    <td>$ 346.49</td>
                    <td>$ 353.84</td>
                    <td>$ 343.00</td>
                    <td>6.47M</td>
                    <td>$ 379.49</td>
                    <td>$ 176.99</td>
                    <td><button type="submit" className="button-delete">Delete</button></td>
                  </tr>
                  <tr>
                    <td>TSLA</td>
                    <td>$ 346.49</td>
                    <td>$ 353.84</td>
                    <td>$ 343.00</td>
                    <td>6.47M</td>
                    <td>$ 379.49</td>
                    <td>$ 176.99</td>
                    <td><button type="submit" className="button-delete">Delete</button></td>
                  </tr>
                  <tr>
                    <td>TSLA</td>
                    <td>$ 346.49</td>
                    <td>$ 353.84</td>
                    <td>$ 343.00</td>
                    <td>6.47M</td>
                    <td>$ 379.49</td>
                    <td>$ 176.99</td>
                    <td><button type="submit" className="button-delete">Delete</button></td>
                  </tr>
                </tbody>
              </table>
              {/* <Link to="/manage+earning" className="button-add" role="button">Add New Earnings</Link> */}
            </div>
          </Route>
        </div>
      </header>
    );
  }
}

export default Header;
