import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import HeaderLink from '../header-link/header-link.component';

import './header-menu.styles.scss';

const HeaderMenu = ({ sections }) => (
  <div className='header-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <HeaderLink key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(HeaderMenu);