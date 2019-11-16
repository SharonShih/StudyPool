import React, { Component } from 'react';
import {
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup_box.css';

class Header extends Component {
    render() {
        return (
            <header className="masthead-1 background-signin">
                <div className="row">
                    <div className="login-dark">
                        <text className="h5-style">Create account</text>
                        <form>
                        
                            <div className="form-row">
                                <image className="icon-pen" />
                                <input className="input-style" type="email" placeholder="  Your Email" />
                                <input className="input-style" type="password" placeholder="  Your Password" />
                                <input className="input-style" type="password" placeholder="  Confirm Password" />

                                <Route>
                                    <Link to="/event" className="btn-primary btn-block button-style" role="button">Sign Up</Link>
                                </Route>
                            </div>
                        </form>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;
