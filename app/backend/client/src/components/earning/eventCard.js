import React from 'react'

const EventCard = ({eventInfo}) => {

  let action;
  if (eventInfo.isGoing) {
    action = "leave";
  } else {
    action = "join"
  }

  return (
    <div className="" >

          <div className="card" style={{width:"300px",marginLeft:"10px"}}>
            <div className="card-body">
              <h5 className="card-title">Event Name: {eventInfo.name}</h5>
              <p className="card-text">Description: {eventInfo.description}</p>
              <p className="card-text">Location:{eventInfo.location}</p>
              <p className="card-text">Start Time:{eventInfo.startTime}</p>
              <p className="card-text">End Time:{eventInfo.endTime}</p>
              <p className="card-text">Numbers:{eventInfo.participants}</p>
              <a href="#" className="card-link"></a>
              <a href="#" className="card-link">{action}</a>
            </div>
          </div>
    </div>
  )
};

export default EventCard