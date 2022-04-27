import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import apiService from '../services/apiService'

export default function OfferCardList(props) {
  const { offer } = props
  // const navigate = useNavigate();
  const [isApplied, setApplication] = useState(false)
  const handleApplication = () => {
    try {
      apiService.createJobApplication(offer._id)
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
      <div>
        <div>{offer.title}</div>
        <div>{offer.description}</div>
        <div>{offer.specificArea}</div>
        <div>{offer.salary}</div>
        <div>{offer.workArea}</div>
        <div>
          {offer.active
            ? 'Active offer'
            : 'This job is not active at the moment.'}
        </div>
        <div>{offer.publicationDate}</div>
        {!isApplied && (
          <button onClick={handleApplication}>Apply to this job</button>
        )}
        {isApplied && <button>You have already applied to this job.</button>}
      </div>
    </>
  )
}
