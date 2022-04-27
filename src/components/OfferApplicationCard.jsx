import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import apiService from '../services/apiService'

export default function OfferCardList(props) {
  const { offerApplication } = props
  console.log(offerApplication);
  
  return (
    <>
      <div>
        <p>Candidatos en tu oferta de trabajo</p>

        <div>{offerApplication.userId.fname}</div>
        <div>{offerApplication.userId.surname}</div>
        <div>{offerApplication.userId.birth}</div>
        <div>{offerApplication.userId.email}</div>
        <div>{offerApplication.userId.gender}</div>
        <div>{offerApplication.userId.workArea}</div>
        <div>{offerApplication.userId.specificArea}</div>
        <div>{offerApplication.userId.location}</div>
  
      </div>
    </>
  );
}
