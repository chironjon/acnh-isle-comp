import React from 'react';

import './header.styles.scss';
import nooklogo from '../../assets/nooklogo.png';

const Header = () => (
  <div className='header'>
    <div><img src={nooklogo} alt='icon'></img></div>
    <h1>ACNH Island Compendium</h1>
    <button>Login/Logout</button>
  </div>
);

export default Header;