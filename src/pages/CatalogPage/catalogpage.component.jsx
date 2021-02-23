import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Scroll from '../../components/scroll/scroll.component'
import ItemList from '../../components/item-list/item-list.component';
import SortAndFilter from '../../components/sort-and-filter/sort-and-filter.component';

import { selectCollections } from '../../redux/collection/collection.selectors'

import './catalogpage.styles.scss';

const CatalogPage = ({collections}) => {
  const [categories, setCategory] = useState('');
  const [subcategories, setSubcategory] = useState('');
  let categoryArray = [];
  let subcategoryArray = [];
  for (const [key, value] of Object.entries(collections.catalog)) {
    // console.log(`entries ${key}: `);
    if(!subcategoryArray.includes(key)){
      subcategoryArray.push(key)
    }
    for (const [subKey, subValue] of Object.entries(value)) {
      if(subKey === 'subcategory'){
        console.log(`${subKey}, ${subValue}`)
        if(!categoryArray.includes(subValue)){
          categoryArray.push(subValue)
        }
      }
    }
  }
  // writing logic to include all categories and sub categories and then picking individual cat's
  return (
    <div className='catalog-container'>
      <div className='categories'>
        <label className='catalog-cat'>Category:</label>
        <select name='catalog-dropdown' id='catalog-category' onChange={(e) => setCategory(e.target.value)}>
          <option default>All</option>
          {
            categoryArray.map(x => (
              <option value={x}>{x}</option>
            ))
          }
        </select>
        <label className='catalog-subcat'>Subcategory:</label>
        <select name='catalog-dropdown' id='catalog-subcategory' onChange={(e) => setSubcategory(e.target.value)}>
          <option default>All</option>
          {
            subcategoryArray.map(x => (
              <option value={x}>{x}</option>
            ))
          }
        </select>
      </div>
      <div className='filter-sort-container'>
        <div className='filter'></div>
        <div className='sort'></div>
      </div>
      <Scroll>
        <ItemList collection={collections.catalog}/>
      </Scroll>
    </div>
);}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);