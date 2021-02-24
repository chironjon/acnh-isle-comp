import React from 'react';
import { Route } from 'react-router-dom';

import HeaderMenu from '../header-menu/header-menu.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='sitetitle'><h1>My Isle Compendium</h1></div>
    <Route path='/acnh-isle-comp' component={HeaderMenu} />
  </div>
);

export default (Header);