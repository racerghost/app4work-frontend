import React from 'react'

export default function OfferCard(props) {
  const { offer } = props;
  return (
    <>
      <div>
        <div>{offer.title}</div>
        <div>{offer.description}</div>
        <div>{offer.workArea}</div>
        <div>{offer.specificArea}</div>
        <div>{offer.salary}</div>
        <div>{offer.publicationDate}</div>
      </div>
    </>
  );
}
