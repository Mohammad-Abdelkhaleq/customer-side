
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Sidebars/Sidebar';
import Footer from '../Footer/Footer';
import './Reqcards.css'

function Reqcard(props) {
  return (
    //   <Card className="text-center cards" style={{ width: '100vh', marginLeft: '10%',marginBottom:'2em' }}>
    //   <Card.Body>
    //     <Card.Title>{props.cardinfo.tktsubject}</Card.Title>
    //     <Card.Text>
    //     {props.cardinfo.tktdescription}.
    //     </Card.Text>
    //     {props.cardinfo.tktstatus==='open'?<Button variant="success" style={{pointerEvents: 'none' }} >open</Button>:<Button variant="info" style={{pointerEvents: 'none' }} >{props.cardinfo.tktstatus}</Button>}
    //     {/* <Button variant="success" style={{pointerEvents: 'none' }} >open</Button> */}
    //   </Card.Body>
    //   {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    // </Card>

<>
  <div className="ag-format-container">
    <div className="ag-courses_box">
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
          <div className="ag-courses-item_bg" />
          <div className="ag-courses-item_title">
            {props.cardinfo.tktsubject}
          </div>
          <div className="ag-courses-item_title">
            {props.cardinfo.tktdescription}
          </div>
          <div className="ag-courses-item_date-box">
            status:
            <span className="ag-courses-item_date">{props.cardinfo.tktstatus}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</>


  );
}
export default Reqcard;