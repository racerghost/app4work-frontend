import React, { useEffect, useState } from 'react'
import apiService from '../services/apiService'
import OfferCard from "../components/OfferCard";
import { useParams } from 'react-router-dom'

export default function UserApplications() {
  const { appId } = useParams()
  const [applicationsByUser, setApplicationsByUser] = useState([]);

  // const [application, setApplication] = useState({});
  const getApplicationsByUser = async () => {
    try {
      const applicationsByUser = await apiService.getApplicationsByUser();
      setApplicationsByUser(applicationsByUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplicationsByUser();
  }, []);
  //función getApplication que va a apiService coge application (paso Id)
  // useEffect llame a getApplication y haga setApplication

  return (
    <>
      {/* pinto el elemento, si son varios un map, etc.*/}
      <div>UserApplications</div>
      <p>This is application id: {appId}</p>
      {applicationsByUser.map((offer) => {
        return <OfferCard offer={offer} />;
      })}
    </>
  );
}
