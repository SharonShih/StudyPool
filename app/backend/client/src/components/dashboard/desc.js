import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Disc extends Component {
  render() {
    return (
        <section className="features-icons bg-light text-center section-main"> 
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon icon-piggy"/>
                        <h3>Manage Earning</h3>
                        <p className="lead mb-0">Help to keep track your stock earning in details.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon icon-list"/>
                        <h3>Favorite List</h3>
                        <p className="lead mb-0">Save the stocks that you are insterested in.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon icon-happy"/>
                        <h3>Easy to Use</h3>
                        <p className="lead mb-0">Makes your stock investment much more easier!</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
  }
}

export default Disc;
