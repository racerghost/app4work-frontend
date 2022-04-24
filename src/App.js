import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./views/_Counter";
import UserList from "./views/UserList";
import Login from './views/Login';
import Navbar from './components/Navbar';
import UserApplications from './views/UserApplications';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/applications/:appId" element={<UserApplications />} />
      </Routes>
    </div>
  );
}

export default App;
