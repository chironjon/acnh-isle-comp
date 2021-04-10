import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SvgIcon from '../svg-icon/svg-icon.component';

import { selectFilterArray } from '../../redux/input/input.selectors';
import { toggleFilter } from '../../redux/input/input.actions';

import './filter-select.styles.scss';

const FilterSelect = ({ filterArray, toggleFilter }) => {
  return (
    <div className='filter-select-container'>
      {
        filterArray.length > 0
        ? 
        // filter display container
          <div className='filter-button-container'>
            {
              filterArray.map(x => {
                // console.log(x)
                return (
                  <div className='filter-button' onClick={() => {
                    toggleFilter(x)
                  }}>
                    <SvgIcon type={'filter-icon'} iconType={x} title={x} />
                  </div>
                )
              })
            }
          </div>
        : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  filterArray: selectFilterArray
})

const mapDispatchToProps = dispatch => ({
  toggleFilter: filterSelected => dispatch(toggleFilter(filterSelected))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect);