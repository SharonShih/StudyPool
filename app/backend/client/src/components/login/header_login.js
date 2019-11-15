import React, { Component } from 'react';
import {
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login_box.css';

class Header extends Component {
    render() {
        return (
            <header className="masthead-1 background-signin">
                <div className="row">
                    <div className="login-dark">
                        <div className="h5-style">Log In</div>
                        <form action="auth" method="POST">
                            <div className="form-row">
                                <div className="icon-image" />
                                <input className="input-style" type="email" placeholder="  Email" />
                                <input className="input-style" type="password" placeholder="  Password" />
                                <Route>
                                    <Link to="/home" className="btn-primary btn-block button-style" role="button">Log In</Link>
                                    <Link to="/" className="text-style" role="button">Forget your Password?</Link>
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
