import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import ItemList from '../../components/item-list/item-list.component';

import { selectCatalog } from '../../redux/collection/collection.selectors'
import { selectCategory, selectSubcategory, selectCatArray, selectSubcatArray } from '../../redux/options/options.selectors'
import { setCategory, setSubcategory, setCatArray, setSubcatArray } from '../../redux/options/options.actions';

import store from '../../redux/store';

import './catalogpage.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

let count = 0;

// const [category, subcategory] = catalog;

const CatalogPage = ({catalog, selectedCategory, selectedSubcategory, setCategory, setSubcategory, setCatArray, categoryArray, setSubcatArray, subcategoryArray}) => {
  // console.log(selectedCategory, selectedSubcategory, categoryArray, subcategoryArray)
  catalog.forEach(({category}) => {
    category.forEach(x => {
      if(!categoryArray.includes(x)) {
        categoryArray.push(x)
      }
    })
  })
  if(count<1){
    setCategory(categoryArray[0])
    count++;
  }
  
  const baseItems = catalog.filter(x => {
    return x.subcategory === selectedSubcategory
  })

  console.log(baseItems)
  // const sortedItems = baseItems.sort((a, b) => {
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
  
  useEffect(() => {
    let tempArray = [];
    catalog.forEach(({category, subcategory}) => {
      if(category.includes(selectedCategory) && !tempArray.includes(subcategory)) {
        tempArray.push(subcategory)
      };
    })
    setSubcatArray([...tempArray])
  }, [selectedCategory, setSubcatArray, catalog])

  return (
    <div className='catalog-container'>
      <div className='categories'>
        <div className='category-button-container'>
          {
            categoryArray.map(x => (
              <div className="cat-button">
                <CustomButton value={x} onClick={() => {
                  setCategory(x)
                }}>{x}</CustomButton>
              </div>
            ))
          }
        </div>
        {
          subcategoryArray.length > 0
          ? 
            <div className='subcategory-button-container'>
              {
                subcategoryArray.sort().map(x => (
                  <div className="subcat-button">
                    <CustomButton value={x} onClick={() => {
                      setSubcategory(x)
                    }}>{x}</CustomButton>
                  </div>
                ))
              }
            </div>
          : null
        }
      </div>

      {/*<div className='filter-sort-container'>
        <div className='filter'></div>
        <div className='sort'></div>
      </div>*/}
      
      <div className='scroll-container'>
        {
          baseItems.length === 0 ? <div>Make a selection</div>
          : (baseItems[0].items instanceof Object) ?
            Object.entries(baseItems[0].items).map(([key, value]) => (
              <div key={key} className='catalog-item-card'>
                {
                  //image display
                  value[0]["Name"] === "magic bag" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/SantaSack.png)`}}/>
                  : (value[0]["Name"] === "Hazure01" || value[0]["Name"] === "Hazure02" || value[0]["Name"] === "Hazure03") ? <div className='image'>no img</div>
                  : selectedSubcategory === "recipes" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/DIYRecipeIcon/${value[0]["DIY Icon Filename"]}.png)`}}/>
                  : value[0]["Back Color"] ?  <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MessageCard/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Source"] === "Leif" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/ShopPlant/${value[0]["Filename"]}.png)`}}/>
                  : selectedSubcategory === "other" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${value[0]["Inventory Filename"]}.png)`}}/>
                  : value[0]["NH Jan"] ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${value[0]["Icon Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Door" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseDoorIcon/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Mailbox" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HousePostIcon/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Incline" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Roofing" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseRoofIcon/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Siding" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseWallIcon/${value[0]["Filename"]}.png)`}}/>
                  : value[0]["Category"] === "Bridge" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${value[0]["Filename"]}.png)`}}/>
                  : (value[0]["Source Notes"] !== "Played by K.K. if you request something he doesn't have (does not give take-home track)" && selectedSubcategory === 'music') ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/Audio/${value[0]["Filename"]}.png)`}}/>
                  : <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${value[0]["Filename"]}.png)`}}/>
                }
              <span className='name'>{capital_letter(value[0]["Name"])}</span>
              <div className='info'>
                <span id='buy'>buy: {value[0]["Buy"]}</span>
                <span id='sell'>sell: {value[0]["Sell"]}</span>
              </div>
              <div className='collection-footer'>

              </div>
              {/*<div className='found'><Emoji symbol={"✔"} /></div>*/}
              {/*<div className='info-mark' onClick={() => {toggleInfoHidden(); 
                addItemInfo(
                  {"item": item,"currentItemCurrentMonthAvail": currentItemCurrentMonthAvail}
                );}}><Emoji symbol={"?"} /></div>*/}
            </div>
            ))
          : null
        }
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalog,
  selectedCategory: selectCategory,
  selectedSubcategory: selectSubcategory,
  categoryArray: selectCatArray,
  subcategoryArray: selectSubcatArray
})

const mapDispatchToProps = dispatch => ({
  setCategory: selectedCategory => dispatch(setCategory(selectedCategory)),
  setSubcategory: selectedSubcategory => dispatch(setSubcategory(selectedSubcategory)),
  setCatArray: catArray => dispatch(setCatArray(catArray)),
  setSubcatArray: subcatArray => dispatch(setSubcatArray(subcatArray))
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);