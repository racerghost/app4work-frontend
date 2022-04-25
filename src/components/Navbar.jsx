import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Link to="/loginUser">Login User</Link>
      <Link to="/loginCompany">Login Company</Link>
      <Link to="/signupCompany">Sign up Company</Link>
      <Link to="/signupUser">Sign up User</Link>
      <Link to="/">Home</Link>
    </>
  );
}
