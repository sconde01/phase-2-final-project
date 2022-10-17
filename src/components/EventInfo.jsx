import React from 'react';
//import { Link } from 'react-router-dom';


const EventInfo = ({ event }) => {
  
  // if (!link) return <h2>Deets coming soon...</h2>
  
  return (
    <div className='event-info'>
   
      <h3 className='name'> {event.name} </h3>
    <p>Save The Date: <br/> {event.date} </p>
    <p>{event.description}</p>
    <a className='event-link'href={event.link}>See link</a>
    <br/>
   
    </div>
  )
}

export default EventInfo