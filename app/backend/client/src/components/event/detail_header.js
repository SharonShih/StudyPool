import React, { Component, } from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './event.css';
import EventCard from './eventCard'


import { Button, Modal, ModalBody, ModalFooter,ModalHeader } from 'reactstrap';

const myTables = [
  {name:"123", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:true},
]

const upcomingTables = [
  {id:1,name:"CS146", participants:"4",description:"W. Andreopoulos",location:"MacQuarrie Hall 222", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:true},
  {id:2,name:"CS147", participants:"1",description:"K. Patra",location:"Duncan Hall 135", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {id:3,name:"CS154", participants:"3",description:"A. Yazdankhah",location:" Science Building 311", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {id:4,name:"ENGL071", participants:"4",description:"R. James",location:"Sweeney Hall 413", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {id:5,name:"BIOL10", participants:"2",description:"C. Low",location:"Science Building 164", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  {id:6,name:"CS157A", participants:"1",description:" H. Gill",location:"MacQuarrie Hall 422", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:true},
  ]
  const currentTables = [
    {id:1,name:"CS149", participants:"1",description:"K. Li",location:"Sweeney Hall 100", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:false},
    {id:2,name:"CS151", participants:"2",description:"J. Pearce",location:"MacQuarrie Hall 422", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {id:3,name:"CS158A", participants:"1",description:"B. Reed",location:"MacQuarrie Hall 225", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {id:4,name:"CS174", participants:"3",description:"F. Di Troia",location:"Washington Square Hall 109", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {id:5,name:"CS100W", participants:"1",description:"D. Caires",location:"Sweeney Hall 435", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
    {id:6,name:"KIN101", participants:"1",description:"M. Crockett",location:"Sweeney Hall 242", ownerID:"me",startTime:"04:00", endTime:"05:00",isGoing:false},
  ]

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      hostTables:myTables,
      upcomingTables:upcomingTables,
      currentOpeningTables:currentTables,


      eventTitle:"",
      eventDate:"",
      startTime:"",
      endTime:"",
      eventLocation:"",
      url:"",
      participateLimit:"",
      eventDescription:""


    }
  }



  render() {
    return (
      <header className="masthead-1 background-home">
        <div className="profile-container">
          <h4>Table Title : CS154</h4>
          <h4>Description : A. Yazdankhah</h4>
          <h4>Location : Science Building 311</h4>
          <h4>Start Time:04:00</h4>
          <h4>End Time:05:00</h4>
          <h4>Numbers:3</h4>
        </div>

      
      </header>
    );
  }
}

export default Header;
