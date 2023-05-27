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
    // console.log(customerObject);
    // console.log(formEmail);
    setcustomerData(customerObject);

    // console.log(customerObject[0].cemail === formEmail);
    if (customerObject[0].cemail === formEmail) {
      setcustomerVarified(true);
    };
  }
  // console.log(customerData);
  // ________________________________________________________________________________________________



  const { user, isAuthenticated } = useAuth0();
  
  useEffect(() => {
      if (isAuthenticated) {
          // http://localhost:3001/getcustomerbyemail?email=alamrimohammad959@gmail.com
          console.log('this is the user', user);
          axios.get(`${process.env.REACT_APP_SERVER_URL}/getcustomerbyemail?email=${user.email}`)
            .then(response => {
              console.log('this is the response', response.data);
              setcustomerData(response.data);
              setcustomerVarified(true);
            })
            .catch(error => {
              console.log('this is the error', error);
            })};
  },[isAuthenticated]);

    console.log('this is the customerData from auth', customerData);

  return (

    <div className="App">
      {/* <Navigationbar /> */}
      <Routes>
        {!customerVarified && <Route path="/" element={<Customerlogin passing={handleLogin} />} />}
        {/* <Route path="/" element={<Customerlogin passing={handleLogin} />} /> */}
        <Route path="/Customersignup" element={<Customersignup />} />
      </Routes>
      {customerVarified && <Customerpage customerData={customerData} />}
      {console.log('this is the customerDATA', customerData)}


    </div>

  );
}

export default App;
