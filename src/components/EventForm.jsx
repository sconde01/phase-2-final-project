import React, { useState } from 'react';
import { baseUrl } from '../Globals';
import { useNavigate } from "react-router-dom";

const EventForm = ({ addEvent }) => {
  const [name, setName] =useState ('')
  const [date, setDate] =useState ('')
  const [description, setDescription] =useState ('')

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
   
    fetch(baseUrl + "/events", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, date, description })
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
          <br />
          <br />
          <br />
          <button type="submit">Add Event</button>

        </div>
      </form>
     
     </div>
  )
}

export default EventForm