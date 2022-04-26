import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)
  const { loginCompany } = useContext(AuthContext)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      loginCompany({ email, password })
        .then(() => {
          navigate('/')
        })
        .catch((error) => {
          const errorDescription = error.response.data.message
          setErrorMessage(errorDescription)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>Login company</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={handlePassword}
          />
          {/* Pintem l'error si la funció de login dona error, sino, res */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login Company</button>
        </form>
      </div>
    </>
  )
}
