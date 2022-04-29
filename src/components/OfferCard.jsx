import React from 'react'

export default function OfferCard(props) {
  const {
    offer: { offerId },
  } = props
  return (
    <>
      <div className="offer-card">
        <h2>{offerId.title}</h2>
        <h4>{offerId.description}</h4>
        <br />
        <p>Conditions:</p>
        <br />
        <ul>
          <li>{offerId.specificArea}</li>
          <li>{offerId.salary}</li>
          <li>{offerId.workArea}</li>
        </ul>
        <p>
          {offerId.active
            ? 'Active offer'
            : 'This job is not active at the moment.'}
        </p>
        <div>Offer published: {offerId.publicationDate}</div>
      </div>
    </>
  )
}
