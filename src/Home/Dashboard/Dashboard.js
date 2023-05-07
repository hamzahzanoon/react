import React from 'react';
import {Row , Col} from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Row className='h-row'>
     <Col>
      <div className='h-path'>
       <div>
        <h3>Dashboard</h3>
        <p>Home</p>
        </div>
       <div className='h-path2'>
       <i className="fa-solid fa-plus"></i>
       <p>Add Shipment</p>
       </div>
      </div>
    </Col>
   </Row> 
  )
}

export default Dashboard;
