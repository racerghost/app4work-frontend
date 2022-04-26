import React, { useState } from 'react'
import apiService from '../services/apiService'
import { useNavigate } from 'react-router-dom'

export default function SignupCompany() {
  // un state para cada campo del formulario
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [workArea, setWorkArea] = useState('')
  const [size, setSize] = useState('')

  // un handleX para cada campo del formulario

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleWorkArea = (e) => {
    setWorkArea(e.target.value)
  }
  const handleSize = (e) => {
    setSize(e.target.value)
  }

  // un handleSubmit para mandar al apiService (prepara ruta apiService)
  // navigate para redigir login

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await apiService.signupCompany({
        email,
        password,
        username,
        name,
        location,
        workArea,
        size,
      })
      navigate(`/loginCompany`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>Signup company</div>
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

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={name}
            onChange={handleName}
          />
          <input
            type="text"
            name="location"
            placeholder="Company Location"
            value={location}
            onChange={handleLocation}
          />
          <input
            type="text"
            name="workArea"
            placeholder="Company general Work Area"
            value={workArea}
            onChange={handleWorkArea}
          />
          <input
            type="text"
            name="size"
            placeholder="Company size"
            value={size}
            onChange={handleSize}
          />
          <button type="submit">SingUp as Company</button>
        </form>
      </div>
    </>
  )
}
