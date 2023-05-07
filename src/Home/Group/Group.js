import React from 'react';
import {Row , Col} from 'react-bootstrap';
import './Group.css';

const Group = () => {
  return (
    <Row className='h-row'>
    <Col className='group'>
     <div className='h-group-main'>
     <Row>
     <div className='h-group'>
       <Col className='trends'>
        <h5>Today's trends <span>( Gross Profit )</span> </h5>
        <p>as of 25May 2023, 09:41 PM</p>
       </Col> 
      
       <Col className='ulnav'>
        <p>Month</p>
        <p className='a-nav-link'>Doy</p>
        <p>Week</p>
       </Col>
       </div> 
      </Row> 
      <img className='group-img' src={require("../../images/full graph.jpg")} alt='shape1' />
     </div>
    </Col>
    <Col className='group-card'>
     <div className='h-group-card'>
      <img src={require("../../images/Group 1000004976.jpg")} alt='shape1' />
     </div>
    </Col>
  </Row> 
  )
}

export default Group;
