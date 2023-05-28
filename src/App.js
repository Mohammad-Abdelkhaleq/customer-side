import React from 'react';
import Navigationbar from './components /Navbar/Navbar';
import Customerlogin from './components /Customerlogin/Customerlogin';
import Customersignup from './components /Signup/Customersignup';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Customerpage from './components /Customerpage/Customerpage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


function App() {
  let [customerVarified, setcustomerVarified] = useState(false);
  let [customerData, setcustomerData] = useState([]);
  let handleLogin = (customerObject, formEmail) => {
    setcustomerData(customerObject);
    if (customerObject[0].cemail === formEmail) {
      setcustomerVarified(true);
    };
  }
  
  // ________________________________________________________________________________________________



  // const { user, isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // http://localhost:3001/getcustomerbyemail?email=alamrimohammad959@gmail.com
  //     console.log('this is the user', user);
  //     axios.get(`${process.env.REACT_APP_SERVER_URL}/getcustomerbyemail?email=${user.email}`)
  //       .then(response => {
  //         console.log('this is the response', response.data);
  //         if (response.data.length > 0) {
  //           setcustomerData(response.data);
  //           setcustomerVarified(true);
  //         }else{
  //           alert('you are not registered,please sign up');
  //         }
  //       })
  //       .catch(error => {
  //         console.log('this is the error', error);
  //       })
  //   };
  // }, [isAuthenticated]);
  function checkAuth( item){
    setcustomerData(item);
    setcustomerVarified(true);
  }
  // ________________________________________________________________________________________________
  return (

    <div className="App">
      <Routes>
        {!customerVarified && <Route path="/" element={<Customerlogin passing={handleLogin} checkAuth={checkAuth} />} />}
        <Route path="/Customersignup" element={<Customersignup />} />
      </Routes>
      {customerVarified && <Customerpage customerData={customerData} />}

    </div>

  );
}

export default App;
