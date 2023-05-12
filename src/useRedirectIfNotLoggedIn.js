import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useRedirectIfNotLoggedIn = () => {
    // const [userData, setUserData] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user = params.get('user');

    const authi = ()=> { if(!user) {
    window.location = '/login';
  }}
  return authi()
//   useEffect(() => {

//     setUserData(user);

//   }, [user]);
};
