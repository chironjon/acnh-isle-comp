import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/icons/islandlogo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
      <label className='home-label'>Home</label>
    </Link>
    <div className='sitetitle'><h1>My Isle Compendium</h1></div>
    <Link className='options' to='/login'>Login/Logout</Link>
  </div>
);

export default Header;