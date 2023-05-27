
import React, { useEffect } from 'react';
import Navigationbar from '../Navbar/Navbar';

import './Customerpage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Sidebars/Sidebar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useState } from 'react';
import Reqcard from '../Reqcard/Reqcard'

import AddCustomerTicket from '../AddCustomerTicket/AddCustomerTicket';

function Customerpage(props) {
let customerData = props.customerData;

let [customerTickets, setcustomerTickets] = useState([]);


let customerTikets= () => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}/getCustomerTickets/${customerData[0].customerid}`)
  .then(response => {
    // console.log('this is the response', response.data);
    setcustomerTickets(response.data);
  }).catch(error => {
    console.log('this is the error', error);
  })
}
;
console.log('this is the customerTickets', customerTickets);
// ______________________________________________________________________________________
let [show, setShow] = useState(false);
function handleshow() {
  setShow(!show);
}
// _______________________________________________________________________________________
function refreshdata(){
  axios.get(`${process.env.REACT_APP_SERVER_URL}/getCustomerTickets/${customerData[0].customerid}`)
  .then(response => {
    // console.log('this is the response', response.data);
    setcustomerTickets(response.data);
  }).catch(error => {
    console.log('this is the error', error);
  })
};


useEffect(() => {customerTikets()},[customerTickets]);



  return (
    <>
    <Navigationbar/>
      <div className='Allcontainer'>
        <Sidebar customerData={customerData}/>
        <div style={{height:'85vh',width:'100%'}} >
          <div className='allRequests' style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', height: '75vh',width:'100%' }}>
            <div className='requestAndButton'>
              <h3>all requiests</h3>
              <hr />
              {customerTickets.map( (item, index) => {
                return(
                    <Reqcard key={index} item={item} cardinfo={item}/>
                )
              })}


            </div>
          </div>
          <Button className='createButtonTicket' variant="primary" onClick={handleshow}>submit a request</Button>
        </div>
        <AddCustomerTicket show={show} hide={handleshow} customerData={customerData} refreshTicketsList={refreshdata}/>
        
      </div>
      <Footer/>
    </>
  )
}
export default Customerpage;









    // <>


    // </>