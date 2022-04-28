import React from 'react'

export default function OfferCard(props) {
  const { application } = props;
  return (
    <>
      <div>
        {/* <div>{application}</div> */}
        {/* <div>{application.offerId.title}</div> */}
        <div>{application.offerId.description}</div>
        <div>{application.offerId.workArea}</div>
        <div>{application.offerId.specificArea}</div>
        <div>{application.offerId.salary}</div>
        <div>{application.offerId.publicationDate}</div>
      </div>
    </>
  );
}
