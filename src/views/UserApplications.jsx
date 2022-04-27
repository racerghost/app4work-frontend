import React, { useEffect, useState } from 'react'
import apiService from '../services/apiService'
import OfferCard from '../components/OfferCard'

export default function UserApplications() {
  const [applicationsByUser, setApplicationsByUser] = useState([])

  // const [application, setApplication] = useState({});
  const getApplicationsByUser = async () => {
    try {
      const applicationsByUser = await apiService.getApplicationsByUser()
      setApplicationsByUser(applicationsByUser.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApplicationsByUser()
  }, [])
  //función getApplication que va a apiService coge application (paso Id)
  // useEffect llame a getApplication y haga setApplication

  return (
    <>
      {applicationsByUser.map((offer, i) => {
        return <OfferCard key={i} offer={offer} />
      })}
    </>
  )
}
