import React, { useEffect, useState } from 'react'
import apiService from '../services/apiService'
import OfferApplicationCard from "../components/OfferApplicationCard";
import { useParams } from 'react-router-dom';

export default function OffersApplications() {
  const [offerApplications, setOfferApplications] = useState([])
  const { id } = useParams();
  
  // const [application, setApplication] = useState({});
  const getOfferApplications = async () => {
    try {
      const offerApplications = await apiService.getOffersApplications(id);
      setOfferApplications(offerApplications.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOfferApplications(id)
  }, [])
  //función getApplication que va a apiService coge application (paso Id)
  // useEffect llame a getApplication y haga setApplication

  return (
    <>
      {offerApplications.map((offerApplication, i) => {
        return <OfferApplicationCard key={i} offerApplication={offerApplication} />;
      })}
    </>
  );
}
