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
        <h2>¡Hola {name}!</h2>
      </div>
      <div>
        <h2>Has aplicado a estas ofertas de empleo:</h2>
        <UserApplications />
      </div>
    </>
  )
}
