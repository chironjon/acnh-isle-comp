import React from 'react';

import ItemCard from '../item-card/item-card.component';

import './item-list.styles.scss';

const ItemList = ({ collection, category, subcategory }) => {
  console.log('item list collection', collection)
  return (
  <div className='item-list-container'>
    {/*
      collection.map(x => {
        if(x['category'] === category) {
          console.log(subcategory, category)
        }
      })
    */}
  </div>
);}

export default ItemList;