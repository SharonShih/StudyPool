import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './earning.css';
import EventCard from './eventCard'

const UpcomingEvents = [
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:true},
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
              ]
  const CurrentEvents = [
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:false},
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
                ]

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>My Table</h1>
        <div className="upcoming-div"> 
          {UpcomingEvents.map((event) => {
              return <EventCard eventInfo = {event}/>
            })
          }       
        </div>
        <h1>Current Opening Table</h1>
        <div className="current-div">
          {CurrentEvents.map((event) => {
              return <EventCard eventInfo = {event}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Header;
