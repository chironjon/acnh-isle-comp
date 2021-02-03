import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Scroll from '../../components/scroll/scroll.component'

import { selectCollections } from '../../redux/collection/collection.selectors'

import './catalogpage.styles.scss';

const CatalogPage = ({collections}) => (
  <div>
    <div className='catalog'>
      <Scroll>
        <div>
          {
            Object.values(collections).forEach(({id, category, subcategory, items}) => {
              console.log(id, category, subcategory)
              items.forEach(item => {
                console.log(item)
              })
            })}
        
        </div>
      </Scroll>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);