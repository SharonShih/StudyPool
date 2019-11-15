import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
    render() {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-auto h-100 text-center text-lg-left">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#">About</a></li>
                            <li className="list-inline-item"><span>⋅</span></li>
                            <li className="list-inline-item"><a href="#">Contact</a></li>
                            <li className="list-inline-item"><span>⋅</span></li>
                            <li className="list-inline-item"><a href="#">Terms of &nbsp;Use</a></li>
                            <li className="list-inline-item"><span>⋅</span></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">© StockU 2019. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 my-auto h-100 text-center text-lg-right">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook fa-2x fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter fa-2x fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram fa-2x fa-fw"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
    }
}

export default Footer;
