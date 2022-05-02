import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import '../styles/style.css'

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const [open, setOpen] = useState(true)

  useEffect(() => {}, [])

  return (
    <>
      {isLoggedIn && user.name != null && (
        <>
            <span className='title'>{user.name }</span>
          <nav>
            <Link className='btn' to="/homeCompany">Home</Link>
            <Link className='btn' to="/admin/offers">My Job offers</Link>
            <button className="btn btn-logOut" onClick={logOutUser}>Logout Company</button>
          </nav>
        </>
      )}

      {isLoggedIn && user.name == null && (
        <>
            <span className='title'>{user.username}</span>
          <nav>
            <Link className='btn' to="/homeUser">Home</Link>
            <Link className='btn' to="/user/offers">View New Job offers</Link>
            <button className="btn btn-logOut" onClick={logOutUser}>Logout User</button>
          </nav>
          
        </>
      )}

      {!isLoggedIn && (
        <>
          <div className={open ? 'hide' : 'logoff-navbar'}>
            <Link
              onClick={() => {
                setOpen(!open)
              }}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="splash-auth">
            <div className={open ? 'logoff-navbar' : 'hide'}>
              <div className="logoff-navbar-sup">
                <Link
                  onClick={() => {
                    setOpen(!open)
                  }}
                  className="button"
                  to="/loginUser"
                >
                  Login User
                </Link>
                <Link
                  onClick={() => {
                    setOpen(!open)
                  }}
                  className="button"
                  to="/signupUser"
                >
                  Sign up User
                </Link>
              </div>

              <div className="logoff-navbar-inf">
                <Link
                  onClick={() => {
                    setOpen(!open)
                  }}
                  className="button"
                  to="/loginCompany"
                >
                  Login Company
                </Link>
                <Link
                  onClick={() => {
                    setOpen(!open)
                  }}
                  className="button"
                  to="/signupCompany"
                >
                  Sign up Company
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
