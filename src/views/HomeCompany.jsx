import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import OfferList from '../views/OfferList'

export default function HomeCompany() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      {isLoggedIn && (
        <>
          <div>
            <h4>Company: {user.name}</h4>
            <br />
          </div>
          <div>
            <h2>These are your current offers:</h2>
            <br />
            <OfferList />
          </div>

          <button onClick={() => navigate('/addOffer')}>Add New Offer</button>
        </>
      )}
      {!isLoggedIn && <>{/* <Link to="/">Home</Link> */}</>}
    </>
  )
}
