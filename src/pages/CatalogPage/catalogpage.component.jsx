import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import ItemList from '../../components/item-list/item-list.component';

import { selectCollections } from '../../redux/collection/collection.selectors'

import './catalogpage.styles.scss';


const CatalogPage = ({collections}) => {
  const [selectedCategory, setCategory] = useState('');
  const [selectedSubcategory, setSubcategory] = useState('');
  const [subcategoryArray, setSubCatArray] = useState([]);
  // const [categoryArray, setCatArray] = useState([]);
  const catArray = [];
  collections.catalog.forEach(({category}) => {
    if(!catArray.includes(category)) {
      catArray.push(category)
      // setCatArray([...categoryArray, category])
    };
  })
  
  const itemsToDisplay = collections.catalog.filter(x => {
      return x.subcategory === selectedSubcategory
    })
    // .map(x => {
    //   return x.items
    // });
  
  // console.log(itemsToDisplay)
  
  useEffect(() => {
      let tempArray = [];
      collections.catalog.forEach(({category, subcategory}) => {
        if(selectedCategory === category && !tempArray.includes(subcategory)) {
          tempArray.push(subcategory)
        };
      })
      setSubCatArray([...tempArray])
      console.log(selectedCategory, selectedSubcategory, subcategoryArray)
  }, [selectedCategory, collections.catalog])

  return (
    <div className='catalog-container'>
      <div className='categories'>
        <div className='category-button-container'>
          {
            catArray.sort().map(x => (
              <div>
                <CustomButton value={x} onClick={() => {
                  setCategory(x)
                  setSubcategory('')
                }}>{x}</CustomButton>
              </div>
            ))
          }
        </div>
      </div>
      {
        subcategoryArray.length > 0
        ? 
        <div className='categories'>
          <div className='subcategory-button-container'>
            {
              subcategoryArray.map(x => (
                <div>
                  <CustomButton value={x} onClick={() => {
                    setSubcategory(x)
                  }}>{x}</CustomButton>
                </div>
              ))
            }
          </div>
        </div>
        : null
      }
      {/*<div className='filter-sort-container'>
        <div className='filter'></div>
        <div className='sort'></div>
      </div>*/}
      <div className='scroll-container'>
        {
          itemsToDisplay.length > 0
          ?
          itemsToDisplay[0].items.map(x => (
            <div>{x['Name']}</div>
          ))
          : null
        }
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);