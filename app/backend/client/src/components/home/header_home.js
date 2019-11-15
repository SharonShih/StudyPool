import React, { Component } from 'react';
import {
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';


class Header extends Component {
    render() {
        return (
            <header className="masthead-1 background-home">
                
                <Route>
                    
                    <div className="profile-container">

                        
                    <div className="input-container">
                        <h2>Create Event</h2>
                        
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Event Title</span>
                            </div>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Event Type</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Specific Class Study Group</option>
                                <option value="2">General Topic Workshop</option>
                            </select>
                        </div>
                        <label for="basic-url">Duration</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Date</span>
                            </div>
                            <input type="text" class="form-control" placeholder="MM/DD/YY" aria-label="StartDate" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Start Time</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">7:00 am</option>
                                <option value="2">7:30 am</option>
                                <option value="3">8:00 am</option>
                                <option value="4">8:30 am</option>
                                <option value="5">9:00 am</option>
                                <option value="6">9:30 am</option>
                                <option value="7">10:00 am</option>
                                <option value="8">10:30 am</option>
                                <option value="9">11:00 am</option>
                                <option value="10">11:30 am</option>
                                <option value="11">12:00 pm</option>
                                <option value="12">12:30 pm</option>
                                <option value="13">13:00 pm</option>
                                <option value="14">13:30 pm</option>
                                <option value="15">14:00 pm</option>
                                <option value="16">14:30 pm</option>
                                <option value="17">15:00 pm</option>
                                <option value="18">15:30 pm</option>
                                <option value="19">16:00 pm</option>
                                <option value="20">16:30 pm</option>
                                <option value="21">17:00 pm</option>
                                <option value="22">17:30 pm</option>
                                <option value="23">18:00 pm</option>
                                <option value="24">18:30 pm</option>
                                <option value="25">19:00 pm</option>
                                <option value="26">19:30 pm</option>
                                <option value="27">20:00 pm</option>
                                <option value="28">20:30 pm</option>
                                <option value="29">21:00 pm</option>
                                <option value="30">21:30 pm</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">End Time</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">7:00 am</option>
                                <option value="2">7:30 am</option>
                                <option value="3">8:00 am</option>
                                <option value="4">8:30 am</option>
                                <option value="5">9:00 am</option>
                                <option value="6">9:30 am</option>
                                <option value="7">10:00 am</option>
                                <option value="8">10:30 am</option>
                                <option value="9">11:00 am</option>
                                <option value="10">11:30 am</option>
                                <option value="11">12:00 pm</option>
                                <option value="12">12:30 pm</option>
                                <option value="13">13:00 pm</option>
                                <option value="14">13:30 pm</option>
                                <option value="15">14:00 pm</option>
                                <option value="16">14:30 pm</option>
                                <option value="17">15:00 pm</option>
                                <option value="18">15:30 pm</option>
                                <option value="19">16:00 pm</option>
                                <option value="20">16:30 pm</option>
                                <option value="21">17:00 pm</option>
                                <option value="22">17:30 pm</option>
                                <option value="23">18:00 pm</option>
                                <option value="24">18:30 pm</option>
                                <option value="25">19:00 pm</option>
                                <option value="26">19:30 pm</option>
                                <option value="27">20:00 pm</option>
                                <option value="28">20:30 pm</option>
                                <option value="29">21:00 pm</option>
                                <option value="30">21:30 pm</option>
                            </select>
                        </div>
                        <label for="basic-url">Event Location or URL</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Location</span>
                            </div>
                            <input type="text" class="form-control" placeholder="City" aria-label="Location" aria-describedby="basic-addon1" />
                        </div>
                        <label for="basic-url">Or</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Zoom/Google Hangout URL</span>
                            </div>
                            <input type="text" class="form-control" placeholder="http://" aria-label="meetingURL" aria-describedby="basic-addon1" />
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Participate Limit</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">1-4 People</option>
                                <option value="2">5-10 People</option>
                                <option value="3">Unlimited</option>
                            </select>
                        </div>

                        <div class="input-group input-descrption">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Event Description</span>
                            </div>
                            <textarea class="form-control" aria-label="Event Description"></textarea>
                        </div>



                        <div className="create-btn">
                            <Link to="/signup" className="btn btn-primary btn-block btn-lg" role="button">Create Event!</Link>
                        </div>

                        </div>

                    </div>
                </Route>
            </header >
        );
    }
}

export default Header;
