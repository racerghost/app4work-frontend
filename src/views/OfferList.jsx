import React, {useEffect, useState} from 'react'
import apiService from '../services/apiService'
import OfferCard from '../components/OfferCard';


export default function OfferList() {
  const [offers, setOffers] = useState([]);

  const getOffers = async () => {
    try {
      const offers = await apiService.getOffers();
      setOffers(offers.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOffers();
  }, [])

  return (
    <div>
      <div>Offer List</div>
      {console.log(offers)}
      {offers.map((offer) => {
        return <OfferCard offer={offer}/>
      })}
    </div>
  );
}