import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './earning.css';

class Header extends Component {
  render() {
    return (
      <header className="masthead-1 background-home">
        <div className="side-nav">
          <Route>
            <Link to="/profile" className="side-nav-item" role="button">My Profile</Link>
            <Link to="/earning" className="side-nav-item side-nav-item-selected" role="button">My Earning</Link>
            <Link to="/fav" className="side-nav-item" role="button">Favorite List</Link>


            <div className="profile-container">
              <h2>My Earning</h2>

              <table className="table">
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Costs</th>
                    <th>Qquity</th>
                    <th>Share</th>
                    <th>Total Earning</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AAPL</td>
                    <td>$ 250.13</td>
                    <td>$ 261.70</td>
                    <td>2</td>
                    <td>+ $ 23.14</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>
                  <tr>
                    <td>GOOGL</td>
                    <td>$ 1301.87</td>
                    <td>$ 1293.00</td>
                    <td>1</td>
                    <td>- $ 8.87</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>
                  <tr>
                    <td>AAPL</td>
                    <td>$ 250.13</td>
                    <td>$ 261.70</td>
                    <td>2</td>
                    <td>+ $ 23.14</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>
                  <tr>
                    <td>GOOGL</td>
                    <td>$ 1301.87</td>
                    <td>$ 1293.00</td>
                    <td>1</td>
                    <td>- $ 8.87</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>
                  <tr>
                    <td>AAPL</td>
                    <td>$ 250.13</td>
                    <td>$ 261.70</td>
                    <td>2</td>
                    <td>+ $ 23.14</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>
                  <tr>
                    <td>GOOGL</td>
                    <td>$ 1301.87</td>
                    <td>$ 1293.00</td>
                    <td>1</td>
                    <td>- $ 8.87</td>
                    <td><button type="submit" className="button-edit">Edit</button></td>
                  </tr>

                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>+ $ 303.14</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <Link to="/manage+earning" className="button-add" role="button">Add New Earnings</Link>
            </div>
          </Route>
        </div>
      </header>
    );
  }
}

export default Header;
