import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./views/_Counter";
import UserList from "./views/UserList";
import SignupCompany from "./views/SignupCompany";
import SignupUser from "./views/SignupUser";
import LoginUser from './views/LoginUser';
import LoginCompany from "./views/LoginCompany";
import Navbar from './components/Navbar';
import UserApplications from './views/UserApplications';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupCompany" element={<SignupCompany />} />
        <Route path="/signupUser" element={<SignupUser />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/applications/:appId" element={<UserApplications />} />
      </Routes>
    </div>
  );
}

export default App;
