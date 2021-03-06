import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import apiService from '../services/apiService'
import { AuthContext } from '../context/auth.context'

export default function OfferCardList(props) {
  const { user } = useContext(AuthContext)
  const { offer } = props
  const navigate = useNavigate()
  const [isApplied, setApplication] = useState(false)
  const handleApplication = () => {
    try {
      apiService.createJobApplication(offer._id, offer.companyId._id)
      setApplication(true)
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect is al backend y llamo a mis applications
  // de estas, si alguna su offerId === offer._id
  // setApplication(true)
  return (
    <>
      <div className="offer-card">
        <h2>{offer.title}</h2>
        <h4>{offer.description}</h4>
        <br />
        <p>Conditions:</p>
   
        <ul>
          <li>Work Area: {offer.workArea}</li>
          <li>Specific Area: {offer.specificArea}</li>
          <li>Salary: {offer.salary}</li>
        </ul>
        <p>
          <div>Offer published: {offer.publicationDate}</div>
          {offer.active
            ? "Active offer"
            : "This job is not active at the moment."}
        </p>

        {user.name != null && (
          <>
            <button onClick={() => navigate(`/offerApplications/${offer._id}`)}>
              View Offer Applications
            </button>
          </>
        )}
        {user.name == null && (
          <>
            <button onClick={handleApplication}>Add application</button>
          </>
        )}
      </div>
    </>
  );
}
