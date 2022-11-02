import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        Math Magicians
      </h1>
      <ul className="Links">
        <Link className="link" to="/">Home</Link>
        <div className="line" />
        <Link className="link" to="/calculator">Calculator</Link>
        <div className="line" />
        <Link className="link" to="/quotes">Quotes</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
