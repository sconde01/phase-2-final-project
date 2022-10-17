import React from 'react'
import EventInfo from './EventInfo'

const EventsList = ({ events }) => {

  const eventCards = events.map(event => 
  <EventInfo key={ event.id } event={ event }/>)

  return (
    <div>
    <h3>Up-and-coming Friend Events</h3>
    <br />
      {eventCards}
    </div>
  )
}

export default EventsList