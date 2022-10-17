import React from 'react'
import EventInfo from './EventInfo'

const EventsList = ({ events }) => {

  const eventCards = events.map(event => 
  <EventInfo 
  key={ event.id } 
  event={ event }/>)

  events.sort((a, b) => new Date(a.date) - new Date(b.date));


  return (
    <div>
     <br/> 
    <h3 className='up-coming'>Up-and-coming Friend Events</h3>
    <br />
      {eventCards}
    </div>
  )
}

export default EventsList