import React from 'react';

import Search from '../search/search.component';
import CategorySelect from '../category-select/category-select.component';
import FilterSelect from '../filter-select/filter-select.component';

import './filter-search-sort.styles.scss';

const FilterSearchSort = () => {
  return (
    <div className='filter-search-sort-container'>
      <Search />
      <CategorySelect />
      <FilterSelect />
    </div>
  )
}

export default FilterSearchSort;