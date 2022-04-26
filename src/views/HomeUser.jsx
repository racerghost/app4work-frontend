import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import UserApplications from "../views/UserApplications";

export default function HomeUser() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  return (
    <>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <Link to="/">Home</Link>
          <span>Hola : {user.username ? user.username : user.name}</span>
          <div>
            <h1>HOLA Usuari: {user.username}</h1>
          </div>
          <div>
            <h2>Estas son tus aplicaciones actuales</h2>
            <UserApplications />
          </div>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/">Home</Link>
        </>
      )}
    </>
  );
}
