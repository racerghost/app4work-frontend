import React from 'react'

export default function OfferCard(props) {
  const {
    offer: { offerId },
  } = props
  return (
    <>
      <div>
        <div>{offerId.title}</div>
        <div>{offerId.description}</div>
        <div>{offerId.workArea}</div>
        <div>{offerId.specificArea}</div>
        <div>{offerId.salary}</div>
        <div>{offerId.publicationDate}</div>
      </div>
    </>
  )
}
