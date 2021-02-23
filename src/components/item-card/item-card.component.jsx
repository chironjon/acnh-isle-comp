import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import InfoIcon from '../info-icon/info-icon.component';

import { toggleInfoHidden } from '../../redux/info/info.actions';

import './item-card.styles.scss';

const InfoCard = ({ hidden, toggleInfoHidden }) => (
  <>
  {
    hidden ? 
    <InfoIcon /> :
    <CustomButton onClick={toggleInfoHidden}>Close</CustomButton>
  }
  </>
);

const mapStateToProps = ({ info: { hidden }}) => ({
  hidden
})

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);