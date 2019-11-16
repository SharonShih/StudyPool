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

  handleModalClick = () => {
    this.setState({modal:!this.state.modal})
  }
  handLeaveTable = (folderId) => {
    console.log("leaveTable")
    console.log(folderId)
    let newUpComingTable = this.state.upcomingTables.filter(tableId => {
      return tableId.id !== folderId;
    })
    this.setState(prevState => ({
      upcomingTables: newUpComingTable
    }))
  }

  handAddTable = (folderId) => {
    console.log("handAddTable")
    console.log(folderId)
    // delete table from current table
    let newCurrentTable = this.state.currentOpeningTables.filter(tableId => {
      return tableId.id !== folderId;
    })
    // add table to mytable
    // let newTableName = "test";
    // let participants = "1";
    // let description = "hi there";
    // let location = "sj";
    // let ownerID = "me";
    // let startTime = "01:00";
    // let endTime = "02:00";
    // let isGoing = true;
    // 
    // let newTable = {id:10,name:"10", participants:"4",description:"description",location:"111", ownerID:"me",startTime:"03:00", endTime:"05:00",isGoing:true};
    let movedTable = this.state.currentOpeningTables.filter(tableId => {
      return tableId.id == folderId;
    })
    console.log("this is removed item:");
    console.log(movedTable[0]);
    // this.setState(prevState => ({
    //   currentTables: newCurrentTable
    // }))
    this.setState(prevState =>({
      currentOpeningTables:newCurrentTable,
      upcomingTables: [...prevState.upcomingTables, movedTable[0]]
    }))
  }
  handleCreateHostTable = () => {
    let newHostTableName = this.state.eventTitle
    let participants = this.state.participateLimit;
    let description = this.state.description;
    let location = this.state.location;
    let ownerID = "me";
    let startTime = this.state.startTime;
    let endTime = this.state.endTime;
    let isGoing = true; 
    let size = this.state.hostTables.size;
    // console.log(this.state.eventTitle)
    // console.log(this.state.participateLimit)
    // console.log(this.state.description)
    // console.log(this.state.startTime)
    // console.log(this.state.endTime)
    // console.log(this.state.location)
    let newHostTable = {id:size ,name:newHostTableName, participants:participants,description:description,location:location, ownerID:"me",startTime:startTime, endTime:endTime,isGoing:true};
    this.setState(prevState =>({
      hostTables: [...prevState.hostTables, newHostTable]
    }))
    this.handleModalClick();
  }


  render() {
    return (
      <header className="masthead-1 background-home">
      <div className="profile-container">

      <Button className="creat-btn"color="info" onClick={this.handleModalClick}>Create Table</Button>
      <Modal isOpen={this.state.modal} toggle={this.handleModalClick} >
        <ModalHeader >Create Table</ModalHeader>
        <ModalBody >

                        
<div className="input-container" style={{marginLeft:0}}>
    {/* <h2>Create Event</h2> */}
    
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3" >Event Title</span>
        </div>
        <input type="text" class="form-control" onChange={e => this.setState({eventTitle:e.target.value})}/>
    </div>
    {/* <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Event Type</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Specific Class Study Group</option>
            <option value="2">General Topic Workshop</option>
        </select>
    </div> */}
    <label for="basic-url">Duration</label>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Date</span>
        </div>

        <input type="text" class="form-control" placeholder="MM/DD/YY" onChange={e => this.setState({eventDate:e.target.value})}/>
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Start Time</label>
        </div>
        <input type="text" class="form-control" placeholder="ex. 10:00am" onChange={e => this.setState({startTime:e.target.value})}/>
        {/* <select class="custom-select" id="inputGroupSelect01">
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
        </select> */}
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">End Time</label>
        </div>
        <input type="text" class="form-control" placeholder="ex. 13:30pm" onChange={e => this.setState({endTime:e.target.value})}/>
        {/* <select class="custom-select" id="inputGroupSelect01">
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
        </select> */}
    </div>
    <label for="basic-url">Event Location</label>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Location</span>
        </div>
        <input type="text" class="form-control" placeholder="City" onChange={e => this.setState({location:e.target.value})}/>
    </div>
    <label for="basic-url">Or</label>
    {/* <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Zoom/Google Hangout URL</span>
        </div>
        <input type="text" class="form-control" placeholder="http://" aria-label="meetingURL" aria-describedby="basic-addon1" />
    </div> */}

    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Participate Limit</label>
        </div>
        <input type="text" class="form-control" placeholder="" onChange={e => this.setState({participateLimit:e.target.value})}/>
        {/* <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">1-4 People</option>
            <option value="2">5-10 People</option>
            <option value="3">Unlimited</option>
        </select> */}
    </div>

    <div class="input-group input-descrption">
        <div class="input-group-prepend">
            <span class="input-group-text" >Event Description</span>
        </div>
        <textarea class="form-control" onChange={e => this.setState({description:e.target.value})}></textarea>
    </div>



    <div className="create-btn">
        {/* <Link to="/signup" className="btn btn-primary btn-block btn-lg" role="button">Create Table!</Link> */}
        <Button color="info" onClick={this.handleCreateHostTable}>Create Table!</Button>
    </div>

    </div>


        </ModalBody>
      </Modal>


        <h1>My Host Table</h1>
        <div className="upcoming-div"> 
          {this.state.hostTables.map((event) => {
              return <EventCard eventInfo = {event}/>
            })
          }       
        </div>

        <h1>Upcoming Table</h1>
        <div className="upcoming-div"> 
          {this.state.upcomingTables.map((event) => {
              return (
                  <Link to="/detail">
                  <EventCard 
                    eventInfo = {event}
                    leaveTable = {this.handLeaveTable}             
                  />
                  </Link>
              )
              
    
            })
          }       
        </div>
        <h1>Current Opening Table</h1>
        <div className="current-div">
          {this.state.currentOpeningTables.map((event) => {
              return (
              <EventCard 
                eventInfo = {event}
                addTable={this.handAddTable}
              />)
            })
          }
        </div>
      </div>
      </header>
    );
  }
}

export default Header;
