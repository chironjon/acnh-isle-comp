import React from 'react';
import { connect } from 'react-redux';

import { searchfieldChange } from '../../redux/input/input.actions'


import './search.styles.scss';

const Search = ({ searchfieldChange }) => {
  return (
    <div className='search-bar-container'>
      {/*search bar container*/}
      <input className='searchfield' type='text' placeholder='search' onChange={searchfieldChange}></input>
    </div>
    
  )
}

const mapDispatchToProps = dispatch => ({
  searchfieldChange: text => dispatch(searchfieldChange(text.target.value))
})

export default connect(null, mapDispatchToProps)(Search);