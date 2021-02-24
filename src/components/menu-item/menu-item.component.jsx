import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div>
      <img className='background-image' src={imageUrl} alt='icon'></img>
    </div>

    <div className='menu-item-content'>
      <span className='subtitle'>{subtitle}</span>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default withRouter(MenuItem);