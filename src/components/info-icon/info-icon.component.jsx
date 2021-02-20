import React from 'react';
import { connect } from 'react-redux';

import { toggleInfoHidden } from '../../redux/info/info.actions'

import { ReactComponent as Searchglass } from '../../assets/icons/searchglass.svg'

import './info-icon.styles.scss';

const InfoIcon = ({ toggleInfoHidden }) => (
  <div className='info-icon' onClick={toggleInfoHidden}>
    <Searchglass className='searchglass'/>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden())
})

export default connect(null, mapDispatchToProps)(InfoIcon);