import React from "react";

import ItemCard from '../item-card/item-card.component';

import './info-modal.styles.scss';

const InfoModal = ({item}) => (
  <div className='info-modal-container'>
    <ItemCard item={item}/>
    
  </div>
)

export default InfoModal;