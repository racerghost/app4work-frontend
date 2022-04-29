import '../App.css'
import React, { useState, useContext } from 'react'
import apiService from '../services/apiService'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export default function AddOffer() {
  // un state para cada campo del formulario
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [companyId] = useState(user._id)
  const [workArea, setWorkArea] = useState('')
  const [specificArea, setSpecificArea] = useState('')
  const [salary, setSalary] = useState('')
  const [active, setActive] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // un handleX para cada campo del formulario

  const handleWorkArea = (e) => {
    setWorkArea(e.target.value)
  }

  const handleSpecificArea = (e) => {
    setSpecificArea(e.target.value)
  }
  const handleSalary = (e) => {
    setSalary(e.target.value)
  }

  const handleActive = (e) => {
    setActive(e.target.checked)
    console.log(active)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  // un handleSubmit para mandar al apiService (prepara ruta apiService)
  // navigate para redigir login

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await apiService.addOffer({
        companyId,
        workArea,
        specificArea,
        salary,
        active,
        title,
        description,
      })
      navigate(`/homeCompany`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Link to="/homeCompany">Home</Link>
      <div>
        {/* <h1>{user._id}</h1> */}
        <h2>Add new offer</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="workArea"
            placeholder="WorkArea"
            value={workArea}
            onChange={handleWorkArea}
          />
          <input
            type="text"
            name="specificArea"
            placeholder="Specific Area"
            value={specificArea}
            onChange={handleSpecificArea}
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={salary}
            onChange={handleSalary}
          />
          <label>Is the offer currently active</label>
          <input
            type="checkbox"
            name="active"
            value={active}
            defaultChecked={active}
            onChange={handleActive}
          />
          <input
            type="text"
            name="title"
            placeholder="Offer Title"
            value={title}
            onChange={handleTitle}
          />
          <input
            type="text"
            name="description"
            placeholder="Offer Description"
            value={description}
            onChange={handleDescription}
          />
          <button type="submit">Add new offer</button>
        </form>
      </div>
    </>
  )
}
