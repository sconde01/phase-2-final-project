import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/events/new">Add Event</Link>
    </nav>
  )
}

export default NavBar