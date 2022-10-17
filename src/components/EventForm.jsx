import React, { useState } from 'react';
import { baseUrl } from '../Globals';
import { useNavigate } from "react-router-dom";

const EventForm = ({ addEvent }) => {
  const [name, setName] =useState ('')
  const [date, setDate] =useState ('')
  const [description, setDescription] =useState ('')
  const [link, setLink] =useState('')

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
   
    fetch(baseUrl + "/events", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, date, description, link })
    })
      .then(r => r.json())
      .then(data => {
        addEvent(data);
        navigate('/events');
      });
  }

  return (
    <div className='form-box'>
      <h3>Add Your Event Here</h3>
      <br />
      <form onSubmit={ handleSubmit }>
        {/* //name input box */}
        <div> 
          <label htmlFor="name">Name of Event:</label>
          <input type="text" 
          name="name" 
          id="name"
          value={ name }
          onChange={e => setName(e.target.value)}
           />
        </div>
        <br />
        {/* //date input box */}
        <div>
          <label htmlFor="date">Date of Event:</label>
          <input type="date" 
          name="date" 
          id="date"
          value={ date }
          onChange={e => setDate(e.target.value)}
           />
        </div>
        <br />
        {/* //description input box */}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea 
          id="description"
          value={ description }
          onChange={e => setDescription(e.target.value)}
           />
        </div>   
        <br />
        {/* //Link input box */}
        <div>
          <label htmlFor="link">Link to event:</label>
          <input type="url" 
          id="event-link"
          value={ link }
          onChange={e => setLink(e.target.value)}
           />
        </div>       
          <br />
          <br />
          <br />
          <button type="submit">Add Event</button>

      </form>
     
     </div>
  )
}

export default EventForm