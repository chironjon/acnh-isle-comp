import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header-link.styles.scss';

const HeaderLink = ({title, imageUrl, linkUrl, history, match, currentUser}) => (
  <div className='header-link' onClick={() => {
      if(currentUser && title === 'login') auth.signOut()
      history.push(`${match.url}${linkUrl}`)
    }}>
      <>
        <img className='logo' src={imageUrl} alt={title}></img>
      </>
      <div className='label-container'>
        <label className='header-link-label'>{(currentUser && title === 'login') ? 'LOGOUT' :title.toUpperCase()}</label>
      </div>
  </div>
)

const HeaderLinkWithRouter = withRouter(HeaderLink)

const mapStateToProps = ({ user : { currentUser }}) => ({
  currentUser
})

export default connect(mapStateToProps)(HeaderLinkWithRouter);