import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <Link to="/">Go to Home</Link>
    </nav>
  )
}

export default Navbar;