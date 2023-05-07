import React from 'react';
import {Row , Col} from 'react-bootstrap';
import './Table.css';


const Tables = () => {
  return (
    <Row className='h-row'>
    <Col className='group-card'>
     <div className='project-complete'>
     <img src={require("../../images/div.project_complete.jpg")} alt='shape1' />
    </div>
   </Col>
   <Col className='group'>
    <div className='group2'>
     <div className='h-group'>
      <div className='trends'>
       <h5>Best Selling Products</h5>
       <p>as of 25May 2023</p>
      </div> 
      <div className='ulnav'>
       <p>Month</p>
       <p className='a-nav-link'>Doy</p>
       <p>Week</p>
      </div>
      </div> 
      <div className='prodact'>
      <div className='prodact-name'>
      <div className='prodact-name-left'>
       <div className='prodact-left'>
        <i className="fa-solid fa-angle-up"></i>
        <i className="fa-solid fa-angle-down"></i>
       </div>
        <i className="fa-solid fa-box"></i>
        <p>Product name</p>  
      </div>
      <div className='prodact-icon'>
       <p>
        <img src={require("../../images/outlets-icon.jpg")} alt='shape1' />
         Shop
       </p>
       <p>
        <img src={require("../../images/Weighing Scale.jpg")} alt='shape1' />
         weight
       </p>
       <p>
        <img src={require("../../images/Group.jpg")} alt='shape1' />
         Quantity
       </p>
       <p>
        <img src={require("../../images/18563858051637926393 1.jpg")} alt='shape1' />
         Remaining.Q
       </p>
      </div>
      </div>
      <hr />
      </div>
      <div className='contents'>
       <div className='content'>
        <div className='content-left'>
         <h5>sport clothes</h5>
         <p>Available</p>
        </div>
        <div className='content-namber'>
         <p className='content-namber-p'>Golden Joule</p>
         <p>186</p>
         <p>92</p>
         <p>92</p>
       </div>
      </div>
       <hr />
     </div>
     <div className='contents c-card'>
       <div className='content'>
        <div className='content-left content-lefts'>
         <h5>sport clothes</h5>
         <p>Available</p>
        </div>
        <div className='content-namber'>
         <p className='content-namber-p'>Golden Joule</p>
         <p>95</p>
         <p>31</p>
         <p>31</p>
       </div>
      </div>
     </div>
     <div className='contents c-card contents-cards'>
     <div className='content'>
      <div className='content-left'>
       <h5>sport clothes</h5>
       <p>Available</p>
      </div>
      <div className='content-namber'>
       <p className='content-namber-p'>Golden Joule</p>
       <p>329</p>
       <p>256</p>
       <p>256</p>
     </div>
    </div>
   </div>
   <div className='contents c-card'>
   <div className='content'>
    <div className='content-left'>
     <h5>sport clothes</h5>
     <p>Available</p>
    </div>
    <div className='content-namber'>
     <p className='content-namber-p'>Golden Joule</p>
     <p>804</p>
     <p>697</p>
     <p>697</p>
   </div>
  </div>
   <hr />
 </div>
  <div className='contents c-card c-cards'>
       <div className='content'>
        <div className='content-left content-lefts'>
         <h5>sport clothes</h5>
         <p>Available</p>
        </div>
        <div className='content-namber'>
         <p className='content-namber-p'>Golden Joule</p>
         <p>95</p>
         <p>31</p>
         <p>12</p>
       </div>
      </div>
     </div>
    </div>
   </Col>
 </Row>
  )
}

export default Tables;
