import React, { useEffect, useState } from "react";
// import './App.css';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import EventForm from "./components/EventForm";
import EventsList from "./components/EventsList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { baseUrl } from "./Globals";


function App() {
  const [events, setEvents] = useState ([]);
  
  useEffect(() => {
    fetch(baseUrl + '/events')
    .then (r => r.json())
    .then (data => setEvents(data))
  }, [])

  // spread events and add new event to end of that array
  const addEvent = event => {
    setEvents([...events, event])
  }
  //const id =1 

  return (
    <Switch>
      <NavBar />
        <Routes>
          <Route path="/" element={ 
            <Home />} />

          <Route exact path="/events" element={ 
            <EventsList 
              events={ events }
            />
          }/>

          <Route exact path="/events/new" element={ 
            <EventForm 
            addEvent={ addEvent }
            />
            }/>


        </Routes>
    </Switch>
  
  );
}

export default App;
