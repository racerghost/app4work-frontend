import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import '../styles/style.css'

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
          navigate('/homeCompany')
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
      <div>
        <h3 className="centered">Please, enter your login data as a company</h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="form-field"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="form-field"
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={handlePassword}
          />
          {/* Pintem l'error si la funció de login dona error, sino, res */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="submit" type="submit">
            Login Company
          </button>
        </form>
      </div>
    </>
  )
}
