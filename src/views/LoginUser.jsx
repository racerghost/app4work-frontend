import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { loginUser } = useContext(AuthContext)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      loginUser({ email, password })
        .then(() => {
          navigate('/homeUser')
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
      <Link to="/">Home</Link>
      <div>Login User</div>
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
          <button type="submit">Login User</button>
        </form>
      </div>
    </>
  );
}
