import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import HomeCompany from "./views/HomeCompany";
import AddOffer from "./views/AddOffer";
import OfferList from "./views/OfferList";
import OfferListUsers from "./views/OfferListUsers";
import OfferApplications from "./views/OfferApplications";
import HomeUser from "./views/HomeUser";
import UserList from "./views/UserList";
import SignupCompany from "./views/SignupCompany";
import SignupUser from "./views/SignupUser";
import LoginUser from './views/LoginUser';
import LoginCompany from "./views/LoginCompany";
import Splash from './views/Splash';
import UserApplications from './views/UserApplications';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <AuthProviderWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/homeCompany" element={<HomeCompany />} />
          <Route path="/addOffer" element={<AddOffer />} />
          <Route path="/homeUser" element={<HomeUser />} />
          <Route path="/signupCompany" element={<SignupCompany />} />
          <Route path="/signupUser" element={<SignupUser />} />
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/loginCompany" element={<LoginCompany />} />
          <Route path="/user/offers" element={<OfferListUsers />} />
          <Route path="/admin/offers" element={<OfferList />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/applications/:appId" element={<UserApplications />} />
          <Route path="/offerApplications/:id" element={<OfferApplications />} />
        </Routes>
      </AuthProviderWrapper>
    </div>
  );
}

export default App;
