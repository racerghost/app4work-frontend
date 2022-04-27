import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <>
      {isLoggedIn && user.name != null && (
        <>
          <Link to="/homeCompany">Home</Link>
          <Link to="/admin/offers">My Job offers</Link>
          <button onClick={logOutUser}>Logout Company</button>
        </>
      )}

      {isLoggedIn && user.name == null && (
        <>
          <Link to="/homeUser">Home</Link>
          <Link to="/user/offers">View New Job offers</Link>
          <button onClick={logOutUser}>Logout User</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/loginUser">Login User</Link>
          <Link to="/loginCompany">Login Company</Link>
          <Link to="/signupCompany">Sign up Company</Link>
          <Link to="/signupUser">Sign up User</Link>
        </>
      )}
    </>
  );
}