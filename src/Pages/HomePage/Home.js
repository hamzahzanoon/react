import React from 'react';
import './Home.css';
import {Row, Container} from 'react-bootstrap';
import Tables from '../../Home/Table/Table';
import Group from '../../Home/Group/Group';
import Cards from '../../Home/Cards/Cards';
import Dashboard from '../../Home/Dashboard/Dashboard';
import Search from '../../Home/Search/Search';

const Home = () => {
  return (
    <div className='home'>
    <Row>
     <Search /> 
    </Row>
    <Container>
     <Row>
      <Dashboard />
     </Row>
     <Row>
      <Cards />
     </Row>
     <Row>
      <Group />
     </Row>
     <Row>
      <Tables />
     </Row>
     </Container>
    </div>
  )
}

export default Home;
