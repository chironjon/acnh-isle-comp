import React from "react";
import { connect } from 'react-redux';

import ItemCard from '../item-card/item-card.component';

import './info-modal.styles.scss';

const InfoModal = ({item, hidden}) => (
  <>
    {
      hidden ? null :
      <div className='info-modal-container'>
        <div className='info-container'>
          <ItemCard item={item}/>
        </div>
      </div>
    }
  </>
)

const mapStateToProps = ({ info: { hidden }}) => ({
  hidden
})

export default connect(mapStateToProps)(InfoModal);