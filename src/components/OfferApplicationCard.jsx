import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import apiService from '../services/apiService'

export default function OfferCardList(props) {
  const { offerApplication } = props
  console.log(offerApplication)

  return (
    <>
      <div>
        <br />
        <h4>These users have applied to this offer</h4>
        <br />
        <div className="offer-card">
          <h2>
            {offerApplication.userId.fname} {offerApplication.userId.surname}
          </h2>
          <br />
          <ul>
            <li>Date of birth: {offerApplication.userId.birth}</li>
            <li>Email: {offerApplication.userId.email}</li>
            <li>Gender: {offerApplication.userId.gender}</li>
            <li>
              Area of work: {offerApplication.userId.workArea} /{' '}
              {offerApplication.userId.specificArea}
            </li>
            <li>Location: {offerApplication.userId.location}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
