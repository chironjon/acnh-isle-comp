import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Scroll from '../../components/scroll/scroll.component'
import ItemDisplay from '../../components/item-display/item-display.component';

import { selectCollections } from '../../redux/collection/collection.selectors'

import './catalogpage.styles.scss';

const CatalogPage = ({collections}) => {
  const [categories, setCategory] = useState([]);
  let choices = [];
  console.log(collections)
  useEffect(() => {
    Object.values(collections['catalog']).forEach(({category, subcategory}) => {
      if(!choices.includes(subcategory)){
        choices.push(subcategory)
        console.log(category, subcategory)
      }
    })
    setCategory(choices)
    console.log('categories', categories)
  }, [])

  return (
  <div>
    <div className='catalog'>
    
      <Scroll>
      {/*
        <ItemDisplay />
            Object.values(collections).forEach(({id, category, subcategory, items}) => {
              if(category === "catalog") {
              console.log(id, subcategory)
                if(!choices.includes(subcategory)){
                  choices.push(subcategory)
                  console.log(subcategory, 'new')
                }
              }
              // items.forEach(item => {
              //   console.log(item)
              // })
            console.log(choices)
            })
            */}
      </Scroll>
    </div>
  </div>
);}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);