import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import { baseUrl, localUrl } from '../../../../API/api';
import AuthContext from '../../../../auth/authContext';

export const UserContext = createContext();
const UserContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [users, setUser] = useState([]);


  useEffect(() => {
    axios
      .get(`${baseUrl}/user/allUsers`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
         console.log(results.data.data);
         setUser(results.data.data);
        
      });
  }, []);


   //const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
