import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <>
      {isLoggedIn && (
        <>
          <span>{user.username ? user.username : user.name}</span>
          <Link to="/">Home</Link>
          <Link to="/admin/offers">Job offers</Link>
          <button onClick={logOutUser}>Logout</button>
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
  )
}
