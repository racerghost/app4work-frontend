import React, { useState } from 'react'
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";

export default function SignupCompany() {
  // un state para cada campo del formulario
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [workArea, setWorkArea] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [salary, setSalary] = useState("");
  const [tags, setTags] = useState("");


  // un handleX para cada campo del formulario

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleBirth = (e) => {
    setBirth(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  
  const handleWorkArea = (e) => {
    setWorkArea(e.target.value);
  };
  const handleSpecificArea = (e) => {
    setSpecificArea(e.target.value);
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  const handleTags = (e) => {
  setTags(e.target.value);
};
  
  // un handleSubmit para mandar al apiService (prepara ruta apiService)
  // navigate para redigir login

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await apiService.signupUser({
          email,
          password,
          username,
          fname,
          surname,
          birth,
          gender,
          location,
          workArea,
          specificArea,
          salary,
          tags,
        });
        navigate(`/loginUser`);
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <>
      
      <div>Signup</div>
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
            name="fname"
            placeholder="Your first name"
            value={fname}
            onChange={handleFname}
          />
          <input
            type="text"
            name="surname"
            placeholder="Your surname"
            value={surname}
            onChange={handleSurname}
          />
          <input
            type="text"
            name="birth"
            placeholder="your birth date DD/MM/YYYY"
            value={birth}
            onChange={handleBirth}
          />
          <input
            type="text"
            name="gender"
            placeholder="Feel free"
            value={gender}
            onChange={handleGender}
          />
          <input
            type="text"
            name="location"
            placeholder="Your current location"
            value={location}
            onChange={handleLocation}
          />
          <input
            type="text"
            name="workArea"
            placeholder="Your general work area"
            value={workArea}
            onChange={handleWorkArea}
          />
          <input
            type="text"
            name="specificArea"
            placeholder="Your speciality in your work area"
            value={specificArea}
            onChange={handleSpecificArea}
          />
          <input
            type="text"
            name="salary"
            placeholder="Your desired salary"
            value={salary}
            onChange={handleSalary}
          />
          <input
            type="text"
            name="tags"
            placeholder="Your habilites separated by semicolon"
            value={tags}
            onChange={handleTags}
          />
          <button type="submit">SingUp as User</button>
        </form>
      </div>
    </>
  );
}
