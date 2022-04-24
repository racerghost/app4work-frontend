import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/">Home</Link>
    </>
  );
}
