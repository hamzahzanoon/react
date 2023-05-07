import React, { useState } from 'react';
import {Col} from 'react-bootstrap';
import './Navbar.css';

const Navbars = () => {
  const [click , setClick] = useState(false);
  const [dropdown , setDropdown] = useState(false);

  const handelClick = () => setClick(!click)
  const closeMobileMenu = () =>setClick(false)



  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    }else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    }else {
      setDropdown(false);
    }
  }
  // const menueItem= [
  //   {
  //     path: "/",
  //     name: "Home",
  //     img: <img className='img-logo' src={require("../../images/preview.png")} alt='shape1' />, 
  //   },
  //   {
  //     path: "/Dashboard",
  //     name: "Dashboard",
  //     icon: <i className="fa-solid fa-house"></i>, 
  //   },
  //   {
  //     path: "/Shops",
  //     name: "Shops",
  //     icon: <i className="fa-solid fa-shop"></i>,
  //     icon2: <i className="fa-solid fa-chevron-right"></i>, 
  //   },
  //   {
  //     path: "/Shipments",
  //     name: "Shipments",
  //     icon: <i className="fa-solid fa-truck-fast"></i>,
  //     icon2: <i className="fa-solid fa-chevron-right"></i>, 
  //   },
  //   {
  //     path: "/Wallet",
  //     name: "Wallet",
  //     icon: <i className="fa-solid fa-wallet"></i>,
  //     icon2: <i className="fa-solid fa-chevron-right"></i>, 
  //   },
  //   {
  //     path: "/My Bills",
  //     name: "My Bills",
  //     icon: <i className="fa-solid fa-money-bill"></i>, 
  //   },
  //   {
  //     path: "/Settings",
  //     name: "Settings",
  //     icon: <i className="fa-solid fa-sliders"></i>, 
  //   },
  //   {
  //     path: "/Sign out",
  //     name: "Sign out",
  //     icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>, 
  //   },
  // ]
  return (
      <nav>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <div className='logo'>
         <div className='menu-icon' onClick={handelClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
         <a href='/'>
          <img className='img-logo' src={require("../../images/preview.png")} alt='shape1' />
         </a>
         </div>
         <div>
         <div className='n-center'>
         <div>
         <a href='/Dashboard' className='nav-links'  onClick={closeMobileMenu}>
          <li to="/Dashboard" className='n-main active'>
           <i className="fa-solid fa-house"></i>
             Dashboard
           </li>
          </a>
          <li className='n-main n-left nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <div>
             <i className="fa-solid fa-shop"></i>
              Shops 
            </div>
            <div className='n-ico'>
             <i className="fa-solid fa-chevron-right"></i>
            </div>
          </li>
          <li className='n-main n-left'>
            <div>
             <i className="fa-solid fa-truck-fast"></i>
              Shipments 
            </div>
            <div className='n-ico'>
             <i className="fa-solid fa-chevron-right"></i>
            </div>
          </li>
          <li className='n-main n-left'>
           <div>
            <i className="fa-solid fa-wallet"></i>
             Wallet 
           </div>
           <div className='n-ico'>
            <i className="fa-solid fa-chevron-right"></i>
           </div>
          </li>
          <a href='/MyBills' className='nav-links'  onClick={closeMobileMenu}>
           <li to="/MyBills" className='n-main'>
            <i className="fa-solid fa-money-bill"></i>
              My Bills
           </li>
          </a>
           <a href='/Settings' className='nav-links'  onClick={closeMobileMenu}>
            <li to="/Settings" className='n-main'>
             <i className="fa-solid fa-sliders"></i>
              Settings
            </li>
           </a>
           </div>
           <a href='/SignOut' className='nav-links'  onClick={closeMobileMenu}>
             <li to="/SignOut" className='n-main n-but'>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Sign out
             </li>
           </a>
          </div>
         </div>
         </ul>
      </nav>
  )
}

export default Navbars;
