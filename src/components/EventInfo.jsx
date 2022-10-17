import React from 'react';
import { Link } from 'react-router-dom';


const EventInfo = ({ event }) => {
  

  return (
    <div className='event-info'>
    <h3> {event.name} </h3>
    <p>date: {event.date} </p>
    <Link to={`/events/${event.id}`}>See Details</Link>
    <br/>
    </div>
  )
}

export default EventInfo