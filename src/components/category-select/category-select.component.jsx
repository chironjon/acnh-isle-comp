import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCategory, selectCatArray } from '../../redux/input/input.selectors'

import { pickCategory } from '../../redux/input/input.actions';

import './category-select.styles.scss';

const CategorySelect = ({ pickCategory, selectedCategory, categoryArray }) => {
  return (
    <div className='category-select-container'>
      {/*category dropdown container*/}
      <span>in:</span>
      {/*category dropdown*/}
      <select className='cat-dropdown' value={selectedCategory} onChange={(e) => pickCategory(e.target.value)}>
        {
          categoryArray.sort().map(x => (
            <option name={x} value={x}>{x}</option>
          ))
        }
      </select>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  selectedCategory: selectCategory,
  categoryArray: selectCatArray
});

const mapDispatchToProps = dispatch => ({
  pickCategory: categorySelected => dispatch(pickCategory(categorySelected))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);