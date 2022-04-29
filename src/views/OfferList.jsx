import React, { useEffect, useState } from 'react'
import apiService from '../services/apiService'
import OfferCardList from '../components/OfferCardList'

export default function OfferList() {
  const [offers, setOffers] = useState([])

  const getOffers = async () => {
    try {
      const offers = await apiService.getOffers()
      setOffers(offers.data)
      console.log(offers.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOffers()
  }, [])

  return (
    <div>
      {offers.map((offer, i) => {
        return <OfferCardList key={i} offer={offer} />
      })}
    </div>
  )
}
