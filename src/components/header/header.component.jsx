import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Nooklogo } from '../../assets/nooklogo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Nooklogo className='logo' />
    </Link>
    <h1>ACNH Island Compendium</h1>
    <Link className='loginout' to='/login'>Login/Logout</Link>
    </div>
    
);

export default Header;