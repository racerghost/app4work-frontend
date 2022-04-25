import React,{useState} from 'react';
import apiService from '../services/apiService';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.loginCompany({ email, password });
      const id = 23234123412535;
      navigate(`/offers/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>Login</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleEmail}/>
          <input type="password" name="password" placeholder="*********" value={password} onChange={handlePassword} />
          <button type="submit">Login Company</button>
        </form>
      </div>
    </>
  );
}
