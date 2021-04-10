import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import ItemList from '../../components/item-list/item-list.component';
import FilterSearchSort from '../../components/filter-search-sort/filter-search-sort.component';
//selectors
import { selectCatalog } from '../../redux/collection/collection.selectors'
import { selectCategory, selectSearchfield } from '../../redux/input/input.selectors';
//actions
import { pickCategory, setCatArray, setFilterArray } from '../../redux/input/input.actions';

import './catalogpage.styles.scss';

const CatalogPage = ({catalog, selectedCategory, pickCategory, setCatArray, setFilterArray, searchfield}) => {
  
  //Variables/Hooks//

  const [baseItemSet, setBaseItemSet] = useState({});

  //Handlers//

  // const handleCategoryPick = (event) => (pickCategory(event.target.value));

  // const handleFilterPick = (event) => (setFilter(event.target.value))

  //effects//
  
  //fill category dropdown
  useEffect(() => {
    console.log('set category dropdown')
    let tempArray = [];
    catalog.forEach(({category}) => {
      category.forEach(x => {
        if(!tempArray.includes(x)) {
          tempArray.push(x)
        }
      })
    })
    pickCategory(tempArray[0])
    setCatArray([...tempArray])
  }, [])

  //set tags array
  useEffect(() => {
    console.log('set filters')
    let tempArray = [];
    catalog.forEach(({category, tags}) => {
      if(category.includes(selectedCategory) && !tempArray.includes(tags)) {
        tempArray.push(tags)
      };
    })
    setFilterArray([...tempArray])
  }, [selectedCategory])

  //base item set to display by selectedCategory
  
  useEffect(() => {
    let tempObj = {};
    console.log('set items to display')
    catalog.forEach(({category, tags, items}) => {
      // console.log(category, tags, items)
      if(category.includes(selectedCategory)){
        Object.assign(tempObj, items)
      }
    })
    setBaseItemSet({...tempObj})
    // console.log(tempObj)
  }, [selectedCategory])
  // useEffect(() => {
  //   let tempObj = {};
  //   console.log('set items to display')
  //   catalog.forEach(({category, tags, items}) => {
  //     // console.log(category, tags, items)
  //     if(category.includes(selectedCategory)){
  //       tempObj[tags] = items;
  //     }
  //   })
  //   setBaseItemSet({...tempObj})
  // }, [catalog, selectedCategory])

  console.log('baseItemSet', typeof baseItemSet, baseItemSet)

  return (
    <div className='catalog-container'>

      {/*search bar, filter and sort container*/}
      <FilterSearchSort />
      
      {/*item display
      <ItemList list={baseItemSet} />*/}
      <ItemList list={Object.entries(baseItemSet).filter((item) =>
        item[0]
          .toLowerCase()
          .includes(searchfield.toLowerCase()))} 
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalog,
  selectedCategory: selectCategory,
  searchfield: selectSearchfield
})

const mapDispatchToProps = dispatch => ({
  pickCategory: categorySelected => dispatch(pickCategory(categorySelected)),
  setCatArray: catArray => dispatch(setCatArray(catArray)),
  setFilterArray: filterArray => dispatch(setFilterArray(filterArray))
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);