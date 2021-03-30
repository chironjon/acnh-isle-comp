import React from 'react';

import ItemCard from '../item-card/item-card.component';

import './item-list.styles.scss';

const ItemList = ({ collection, category, tags }) => {
  console.log('item list collection', collection)
  return (
  <div className='item-list-container'>
    {/*
      collection.map(x => {
        if(x['category'] === category) {
          console.log(tags, category)
        }
      })
    */}
  </div>
);}

export default ItemList;