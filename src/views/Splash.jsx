import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'



export default function Splash() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <Link to="/">Home</Link>
          <div>
            <span>
              Hi, you are loggedin as:{' '}
              {user.username ? user.username : user.name}
            </span>
          </div>
        </>
      )}
    </>
  )
}
