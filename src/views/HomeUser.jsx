import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import UserApplications from '../views/UserApplications'

export default function HomeUser() {
  const { isLoggedIn, user } = useContext(AuthContext)
  const [name, setName] = useState('')

  useEffect(() => {
    try {
      if (isLoggedIn) {
        setName(user.username)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div>
        <h2>¡Hello {name}!</h2>
      </div>
      <div>
        <h2 className="centered">You have applied to these job offers:</h2>
        <UserApplications />
      </div>
    </>
  )
}
