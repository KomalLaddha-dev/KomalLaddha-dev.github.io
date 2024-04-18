import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Number">Game</Link>
        </li>
        <h1 style={{ color: 'white', textAlign: 'right', marginRight: '10px' }}>Developed By Komal Laddha</h1>
      </ul>
    </nav>
  );
}

export default Navbar;