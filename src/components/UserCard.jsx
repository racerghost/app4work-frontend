import React from 'react'

export default function UserCard(props) {
  const { user } = props;
  return (
    <><div>{user.email}</div><div>{user.username}</div></>
  )
}
