import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Studies</Link> 
      <br/>
      <Link to="/subjects">Subjects</Link>
      <br />
      <Link to="/events">Events</Link>
    </nav>
  );
}

export default Navbar;
