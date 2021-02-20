import React from 'react';

import ItemCard from '../item-card/item-card.component';

import './item-list.styles.scss';

const ItemList = ({ collection, choice }) => {
  console.log('item list collection', collection)
  return (
  <div>
    <ItemCard item={collection[choice]}/>
  </div>
);}

export default ItemList;