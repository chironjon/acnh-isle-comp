import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import InfoIcon from '../info-icon/info-icon.component';

import { toggleInfoHidden, selectInfo } from '../../redux/info/info.actions';

import './item-card.styles.scss';

const InfoCard = ({ item, hidden, toggleInfoHidden, selectInfo }) => {
  console.log('item', item)
  return (
  <div className='info-card'>
    {
      hidden ? 
      <InfoIcon onClick={selectInfo}/> :
      <CustomButton onClick={toggleInfoHidden}>Close</CustomButton>
    }
  </div>
)};
//() => selectInfo(item)
const mapStateToProps = ({ info: { hidden }}) => ({
  hidden
})

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden()),
  selectInfo: item => dispatch(selectInfo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);