import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import './CustomerLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Customerlogin(props) {
    let [customerData, setcustomerData] = useState({}); // this is the data that we get from the server
    let [formEmail, setformEmail] = useState('');

    let varifyUser = (e) => {
        e.preventDefault();
        function Customer(email, password) {
            this.cemail = email;
            this.cpassword = password;
        }

        let email = e.target[0].value;
        setformEmail(email);
        // console.log('this is the formEmail', formEmail);
        let password = e.target[1].value;
        // console.log('this is the password', password);
        let varifycustomer = new Customer(email, password);
        // console.log('this is the object', varifycustomer);
        let varify = () => {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/costmerValidationLogIn`, varifycustomer)
                .then(response => {
                    setcustomerData(response.data);
                    props.passing(response.data, email)
                    // console.log('this is the response', response.data);
                    if (response.data === "Invalid email or password") {
                        alert('Invalid email or password');
                    }
                })
        }
        varify();
    }

    // useEffect(() => {

    //     // varifyUser()

    // }, [customerData]);


    // __________________________________________________________________________________________________
    let { loginWithRedirect} = useAuth0();
    const { user, isAuthenticated } = useAuth0();


    useEffect(() => {
        if (isAuthenticated) {
          // http://localhost:3001/getcustomerbyemail?email=alamrimohammad959@gmail.com
          console.log('this is the user', user);
          axios.get(`${process.env.REACT_APP_SERVER_URL}/getcustomerbyemail?email=${user.email}`)
            .then(response => {
              console.log('this is the response', response.data);
              if (response.data.length > 0) {
                // setcustomerData(response.data);
                // setcustomerVarified(true);
                props.checkAuth(response.data);

              }else{
                alert('you are not registered,please sign up');
              }
            })
            .catch(error => {
              console.log('this is the error', error);
            })
        };
      }, [isAuthenticated]);



    return (

        <>
            <MDBContainer className="my-5" >

                <MDBCard className="h-25">
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://e1.pxfuel.com/desktop-wallpaper/707/27/desktop-wallpaper-bulb-lighting-rope-electricity-edisons-light-lamp-mobile.jpg' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <span className="h1 fw-bold mb-0"></span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                <form onSubmit={varifyUser}>
                                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit' style={{ width: '100%' }}>Login</MDBBtn>
                                </form>

                                <MDBBtn className="mb-2 w-100" size="lg" onClick={()=>loginWithRedirect()}>
                                    <MDBIcon fab icon="google" className="mx-2" />
                                    Sign in with google
                                </MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <Link to="/Customersignup"><p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p></Link>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>


        </>



//  <>
// <div className="background">
//   <div className="shape" />
//   <div className="shape" />
// </div>
// <form onSubmit={varifyUser}>
//   <h3>Login Here</h3>
//   <label htmlFor="username">Username</label>
//   <input type="text" placeholder="Email or Phone" id="username" />
//   <label htmlFor="password">Password</label>
//   <input type="password" placeholder="Password" id="password" />
//   <button className='logIn' type='submit' >Log In</button>
//   <div className="social">
//     <div className="go">
//       <button className="fab fa-google" onClick={()=>loginWithRedirect()} /> Google
//     </div>
//   </div>
// </form>
// </> 


    );
}
export default Customerlogin;