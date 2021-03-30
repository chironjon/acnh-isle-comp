import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//components
import CustomButton from '../../components/custom-button/custom-button.component';
import ItemList from '../../components/item-list/item-list.component';
//selectors
import { selectCatalog } from '../../redux/collection/collection.selectors'
import { selectSearchfield, selectCategory, selectFilter, selectCatArray, selectFilterArray } from '../../redux/input/input.selectors';
//actions
import { searchfieldChange, setCategory, setFilter, setCatArray, setFilterArray } from '../../redux/input/input.actions';

import './catalogpage.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

// let initialRun = true;

const CatalogPage = ({catalog, searchfield, searchfieldChange, selectedCategory, selectedFilter, setCategory, setFilter, setCatArray, categoryArray, setFilterArray, filterArray}) => {

  //Variables/Hooks//

  const [baseItemSet, setBaseItemSet] = useState({});

  //Handlers//

  // const handleCategoryPick = (event) => (setCategory(event.target.value));

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
    setCategory(tempArray[0])
    setCatArray([...tempArray])
  }, [])
  //set tags array
  useEffect(() => {
    console.log('set filters')
    let tempArray = [];
    catalog.forEach(({category, tags, items}) => {
      if(category.includes(selectedCategory) && !tempArray.includes(tags)) {
        tempArray.push(tags)
      };
    })
    setFilterArray([...tempArray])
  }, [selectedCategory])

  //base item set to display
  useEffect(() => {
    let tempObj = {};
    console.log('set items to display')
    catalog.forEach(({category, tags, items}) => {
      if(category.includes(selectedCategory)){
        Object.assign(tempObj, items)
      }
    })
    // Object.values(tempObj).forEach(x => (
    //   console.log(x)
    // ))
    setBaseItemSet({...tempObj})
    console.log(tempObj)
  }, [selectedCategory])
  
  //apply filters to baseItemSet
  // useEffect(() => {
  //   console.log('apply filters')
  //   baseItemSet.filter(x => {
  //     return x.tags === selectedFilter
  //   })
  // }, [selectedFilter])

  // if(Object.keys(baseItemSet) > 0){
    // const searchfieldFilter = Object.entries(baseItemSet[0].items)
    // .filter(({item}) =>
    //   item["Name"]
    //     .toLowerCase()
    //     .includes(searchfield.toLowerCase())
    // )
  // }


  // const sortedItems = baseItemSet.sort((a, b) => {
        // var nameA = a.item["Name"].toUpperCase();
        // var nameB = b.item["Name"].toUpperCase();
        // if (order === "desc") {
        //   if (nameA < nameB) {
        //     return -1;
        //   }
        //   if (nameA > nameB) {
        //     return 1;
        //   }
        // } else if (order === "inc") {
        //   if (nameA > nameB) {
        //     return -1;
        //   }
        //   if (nameA < nameB) {
        //     return 1;
        //   }
        // }
  // }) 
  // initialRun = false;


  console.log(searchfield)
  // console.log(Object.values(baseItemSet).length)
  // Object.values(baseItemSet).forEach(x => (
  //   console.log(x)
  // ))
  return (
    <div className='catalog-container'>
      <div className='search-filter-sort'>
        <div className='search-bar-container'>
          <input className='searchfield' type='text' placeholder='search' onChange={searchfieldChange}></input>
        </div>
        <div className='category-container'>
          <span>in:</span>
          <select className='cat-dropdown' value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
            {
              categoryArray.sort().map(x => (
                <option name={x} value={x}>{x}</option>
              ))
            }
          </select>
        </div>
        <div className='filters-container'>
          {
            filterArray.length > 0
            ? 
              <div className='filter-button-container'>
                {
                  filterArray.sort().map(x => (
                    <CustomButton value={x} onClick={() => {
                      setFilter(x)
                    }}>{x}</CustomButton>
                  ))
                }
              </div>
            : null
          }
        </div>
      </div>
      
      <div className='scroll-container'>
        
        {
          Object.keys(baseItemSet).length > 0 ?
            Object.entries(baseItemSet).map(([name, items], i) => (
              <div key={i} className='catalog-item-card'>
                {/*
                  console.log(name, items[0])
                */}
                {
                  //image display
                  name === "magic bag" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/SantaSack.png)`}}/>
                  : (name === "Hazure01" || name === "Hazure02" || name === "Hazure03") ? <div className='image'>no img</div>
                  : selectedCategory === "recipes" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/DIYRecipeIcon/${items[0]["DIY Icon Filename"]}.png)`}}/>
                  : items[0]["Back Color"] ?  <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MessageCard/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Source"] === "Leif" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/ShopPlant/${items[0]["Filename"]}.png)`}}/>
                  : selectedCategory === "other" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${items[0]["Inventory Filename"]}.png)`}}/>
                  : items[0]["NH Jan"] ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${items[0]["Icon Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Door" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseDoorIcon/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Mailbox" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HousePostIcon/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Incline" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Roofing" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseRoofIcon/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Siding" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseWallIcon/${items[0]["Filename"]}.png)`}}/>
                  : items[0]["Category"] === "Bridge" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${items[0]["Filename"]}.png)`}}/>
                  : (items[0]["Source Notes"] !== "Played by K.K. if you request something he doesn't have (does not give take-home track)" && selectedCategory === 'music') ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/Audio/${items[0]["Filename"]}.png)`}}/>
                  : <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${items[0]["Filename"]}.png)`}}/>
                }
              <span className='name'>{name}</span>
              {
                (items.length > 1 && items[0]["Variation"] !== "NA") ? 
                  <div>
                  <span>-  </span>
                  <span>{items[0]["Variation"]}</span>
                  <span>  +</span>
                  </div> 
                : null
              }
              <span className='info'>
                <span id='buy'>buy: {items[0]["Buy"]}</span>
                <span id='sell'>sell: {items[0]["Sell"]}</span>
              </span>
              <div className='collection-footer'>

              </div>
              
            </div>
            ))
          : null
              }
        
              {/*<div className='found'><Emoji symbol={"✔"} /></div>*/}
              {/*<div className='info-mark' onClick={() => {toggleInfoHidden(); 
                addItemInfo(
                  {"item": item,"currentItemCurrentMonthAvail": currentItemCurrentMonthAvail}
                );}}><Emoji symbol={"?"} /></div>*/}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalog,
  selectedCategory: selectCategory,
  selectedFilter: selectFilter,
  categoryArray: selectCatArray,
  filterArray: selectFilterArray,
  searchfield: selectSearchfield
})

const mapDispatchToProps = dispatch => ({
  searchfieldChange: text => dispatch(searchfieldChange(text.target.value)),
  setCategory: categorySelected => dispatch(setCategory(categorySelected)),
  setFilter: filterSelected => dispatch(setFilter(filterSelected)),
  setCatArray: catArray => dispatch(setCatArray(catArray)),
  setFilterArray: filterArray => dispatch(setFilterArray(filterArray))
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);