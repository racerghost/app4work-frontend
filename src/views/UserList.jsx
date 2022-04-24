import React, {useEffect, useState} from 'react'
import apiService from '../services/apiService'
import UserCard from '../components/UserCard';

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await apiService.getUsers();
      setUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <div>UserList</div>
      {console.log(users)}
      {users.map((user) => {
        return <UserCard user={user}/>
      })}
    </div>
  );
}