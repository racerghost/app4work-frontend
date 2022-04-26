import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './../context/auth.context'

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <Link to="/">Home</Link>
          <span>{user.username ? user.username : user.name}</span>
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
