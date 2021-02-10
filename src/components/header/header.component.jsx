import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/icons/islandlogo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/acnh-isle-comp'>
      <Logo className='logo' />
      <label className='home-label'>Home</label>
    </Link>
    <div className='sitetitle'><h1>My Isle Compendium</h1></div>
    <div className='options' >
      <Link className='option' to='/acnh-isle-comp/login'>Login/Logout</Link>
    </div>
  </div>
);

export default Header;