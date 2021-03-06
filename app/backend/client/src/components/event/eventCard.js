import React from 'react'
import { Button} from 'reactstrap';
import {
  Route,
  Link
} from "react-router-dom";

const EventCard = ({eventInfo,leaveTable,addTable}) => {

  let action;
  if (eventInfo.isGoing) {
    action = (
      <Button onClick={() => leaveTable(eventInfo.id)}>Leave</Button>
    )
  } else {
    action = (
      <Button onClick={() => addTable(eventInfo.id)}>add</Button>
    )
  }

  return (
    <div className="" >

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Event Name: {eventInfo.name}</h5>
              <p className="card-text">Description: {eventInfo.description}</p>
              <p className="card-text">Location:{eventInfo.location}</p>
              <p className="card-text">Start Time:{eventInfo.startTime}</p>
              <p className="card-text">End Time:{eventInfo.endTime}</p>
              <p className="card-text">Numbers:{eventInfo.participants}</p>
              <a href="#" className="card-link"></a>
              {action}
              <Link to="/detail">
                <Button className="card-text" style={{marginLeft:"50px"}}>See Detail</Button>
              </Link>
            </div>
          </div>
    </div>
  )
};

export default EventCard