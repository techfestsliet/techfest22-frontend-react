import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { localUrl } from '../../../../../API/api';
import AuthContext from '../../../../../auth/authContext';

export const CoordinatorContext = createContext();
const CoordinatorContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [coordinator, setCoordinator] = useState([]);
  const deleteCo = async props => {
    await axios.delete(`${localUrl}/coordinator/delete/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
  };

  const updateCo = async props => {
    console.log(props);
  };
  useEffect(() => {
    axios
      .get(`${localUrl}/coordinator/get-all-details`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        setCoordinator(results.data.c);
      });
  }, [deleteCo]);

  // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <CoordinatorContext.Provider value={{ coordinator, deleteCo }}>
      {props.children}
    </CoordinatorContext.Provider>
  );
};
export default CoordinatorContextProvider;
