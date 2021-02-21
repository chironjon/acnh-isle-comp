import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import HeaderMenu from '../header-menu/header-menu.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Route path='/acnh-isle-comp' component={HeaderMenu} />
    <div className='sitetitle'><h1>My Isle Compendium</h1></div>
    <div className='account' >
    {
      currentUser ?
      <div className='login' onClick={() => auth.signOut()}>Logout</div>
      :
      <Link className='login' to='/acnh-isle-comp/login'>Login</Link>
    }
    </div>
    {/*<Link className='logo-container' to='/acnh-isle-comp'>
      <Logo className='logo' />
      <label className='home-label'>Home</label>
      <Switch>
      </Switch>
      </Link>*/}
  </div>
);

const mapStateToProps = ({ user : { currentUser }}) => ({
  currentUser
})

export default connect(mapStateToProps)(Header);