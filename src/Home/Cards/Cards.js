import React from 'react';
import {Row , Col} from 'react-bootstrap';
import './Cards.css';

const Cards = () => {
  return (
   <Row className='h-row'>
    <Col className='h-boxs'>
     <div className='h-box'>
     <div className='h-box-left'>
      <div className='div-icon'> <p>Totol Clients</p></div>
      <div className='box-namber'>
       <h4>35</h4>
       <hr />
       <p className='child-les'> <span>+5%</span> than yesterday </p>
      </div>
      </div>
      <div>
        <img className='child-img' src={require("../../images/Frame-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Col>
    <Col className='h-boxs'>
     <div className='h-box'>
     <div className='h-box-left'>
       <p className='div-icon'>Shipments per month</p>
       <h4>15</h4>
       <hr />
       <p className='child-les child-lest'> <span>+5%</span> than yesterday </p>
      </div>
      <div>
        <img src={require("../../images/Artboard_36-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Col>
    <Col className='h-boxs'>
     <div className='h-box'>
     <div className='h-box-left'>
       <p className='div-icon'>Totol Shipments</p>
       <h4>25</h4>
       <hr />
       <p className='child-les'> <span>+5%</span> than yesterday </p>
      </div>
      <div>
        <img className='child-img' src={require("../../images/Frame2-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Col>
  </Row> 
  )
}

export default Cards;
