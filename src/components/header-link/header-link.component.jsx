import React from 'react';
import { withRouter } from 'react-router-dom';

import './header-link.styles.scss';

const HeaderLink = ({title, imageUrl, linkUrl, history, match}) => (
  <div className='header-link' onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <>
      <img className='logo' src={imageUrl} alt={title}></img>
    </>    
    <div className='label-container'>
      <label className='header-link-label'>{title.toUpperCase()}</label>
    </div>
  </div>
)

export default withRouter(HeaderLink);