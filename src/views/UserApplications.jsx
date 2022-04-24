import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

export default function UserApplications() {

  const { appId } = useParams();
  const [application, setApplication] = useState({});
  
  //función getApplication que va a apiService coge application (paso Id)
  // useEffect llame a getApplication y haga setApplication

  return (
    <>
      {/* pinto el elemento, si son varios un map, etc.*/}
      <div>UserApplications</div>
      <p>This is application id: {appId}</p>
    </>
  );
}
