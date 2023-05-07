import React from 'react';
import {Row , Col} from 'react-bootstrap';
import './Search.css';

const Search = () => {
  return (
    <Row className='h-top'>
    <Col>
      <div className='h-home'>
       <div className='h-left'>
        <div className='h-name'>
         <h5>welcome</h5>
         <h6>Abdullah Foundation</h6>
        </div>
        <div className='h-input'>
         <input type='text' placeholder='Search here...' /> 
         <i className="fa-solid fa-magnifying-glass"></i>
        </div>
       </div>
       <div className='h-icons'>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-globe"></i>
        <img src={require("../../images/client_img.png.jpg")} alt='shape1' />
       </div>
      </div>
     </Col>
    </Row> 
  )
}

export default Search;
