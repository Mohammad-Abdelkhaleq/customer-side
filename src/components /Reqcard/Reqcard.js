
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Sidebars/Sidebar';
import Footer from '../Footer/Footer';

function Reqcard(props) {
  return (
  //   <div className="reqcard" >
  //             <Card  style={{ width: '75%', marginLeft: '10%',marginBottom:'2em' }}>
  //               <Card.Header as="h6" style={{ display: 'flex' }}>{props.cardinfo.tktsubject}
  //               </Card.Header>
  //               <Card.Body>
  //                 {/* <Card.Title>Special title treatment</Card.Title> */}
  //                 <Card.Text>
  //                   {props.cardinfo.tktdescription}
  //                 </Card.Text>
  //                 <Button variant="success" style={{  marginLeft: '70%', pointerEvents: 'none' }} >open</Button>
  //               </Card.Body>
  //             </Card>
  //   </div>
  // );

  <Card className="text-center" style={{ width: '100vh', marginLeft: '10%',marginBottom:'2em',border: '1px solid black' }}>
  <Card.Body>
    <Card.Title>{props.cardinfo.tktsubject}</Card.Title>
    <Card.Text>
    {props.cardinfo.tktdescription}.
    </Card.Text>
    <Button variant="success" style={{pointerEvents: 'none' }} >open</Button>
  </Card.Body>
  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
</Card>
);
}
export default Reqcard;