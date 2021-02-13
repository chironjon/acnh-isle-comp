import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/icons/islandlogo.svg';
import HeaderMenu from '../header-menu/header-menu.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
      {/*<Link className='logo-container' to='/acnh-isle-comp'>
        <Logo className='logo' />
        <label className='home-label'>Home</label>
</Link>*/}
      <Switch>
        <Route path='/acnh-isle-comp/' component={HeaderMenu} />
      </Switch>
    <div className='sitetitle'><h1>My Isle Compendium</h1></div>
    <div className='account' >
    {
      currentUser ?
      <div className='login' onClick={() => auth.signOut()}>Logout</div>
      :
      <Link className='login' to='/acnh-isle-comp/login'>Login</Link>
    }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);