//import React, { useState } from 'react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { baseUrl, localUrl } from '../../../API/api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthContext from '../../../auth/authContext';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';

const UserPay = () => {
  const authContext = useContext(AuthContext);
  const [errosMade, setErrosMade] = useState();
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const payMentStatus = searchParams.get('paystatus');
    if (payMentStatus === 'true') {
      setErrosMade({
        title: 'Payment Success',
        message: 'Your payment recorded successfully!',
      });
    }
    if (payMentStatus === 'false') {
      setErrosMade({
        title: 'Payment Failed',
        message: 'Your payment was failed!',
      });
    }
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(result => {
        if (
          result.status != 200 ||
          (result.status != 201 && result.data.isError)
        ) {
          setErrosMade({
            title: 'Auth Error',
            message: 'Wrong user auth!',
          });
          authContext.logout();
          return;
        }
        setUser(result.data.user);
      });
  }, []);
  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const paySilver = async () => {
    const userPayData = {
      price: 300,
    };

    const fetchdata = await axios({
      method: 'post',
      data: userPayData,
      url: `${baseUrl}/pay/user`,
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    console.log(fetchdata.data);
    console.log('clickef');
    window.location.href = fetchdata.data.url;
  };
  const payGold = async () => {
    const userPayData = {
      price: 600,
    };

    const fetchdata = await axios({
      method: 'post',
      data: userPayData,
      url: `${baseUrl}/pay/user`,
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    //  return console.log('clickef');
    window.location.href = fetchdata.data.url;
  };
  return (
    <>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {user && user.paymentDetails.isSuccess && (
        <div className="container-fluid mt-5 pt-5 center">
          <h1>You have already paid!</h1>
          <h2>
            Your subscription is{' '}
            {user.paymentDetails.subscriptionType === '300' ? 'SILVER' : 'GOLD'}
          </h2>
        </div>
      )}
      <div className="main">
        {user && !user.paymentDetails.isSuccess && (
          <div className="container-fluid mt-5 pt-5 center">
            <Button
              variant="success"
              style={{ marginBottom: '10px' }}
              type="submit"
              block
              onClick={paySilver}
            >
              <h1> 300 Silver</h1>
            </Button>
            <br />
            <Button variant="success" type="submit" block onClick={payGold}>
              <h1> 600 Gold</h1>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default UserPay;
