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
            <br />
          </div>
          <div>
            <h2 className='centered'>These are your current offers</h2>
            <br />
            <OfferList />
          </div>

          <button className="btn-addOffer" onClick={() => navigate('/addOffer')}>Add New Offer</button>
        </>
      )}
      {!isLoggedIn && <>{/* <Link to="/">Home</Link> */}</>}
    </>
  )
}
