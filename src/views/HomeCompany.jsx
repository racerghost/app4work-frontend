import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import OfferList from "../views/OfferList";


export default function HomeCompany() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <div>
            <h1>HOLA Companyia: {user.name}</h1>
          </div>
          <div>
            <h2>Estas son tus ofertas actuales</h2>
            <OfferList />
          </div>

          <button onClick={() => navigate("/addOffer")}>Add New Offer</button>
        </>
      )}
      {!isLoggedIn && (
        <>
          {/* <Link to="/">Home</Link> */}
        </>
      )}
    </>
  );
}


