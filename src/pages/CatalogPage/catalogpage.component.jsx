import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import ItemList from '../../components/item-list/item-list.component';

import { selectCollections } from '../../redux/collection/collection.selectors'

import './catalogpage.styles.scss';
function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
// setting up catalog page before breaking down into components

const CatalogPage = ({collections}) => {
  const [selectedCategory, setCategory] = useState('');
  const [selectedSubcategory, setSubcategory] = useState('');
  const [subcategoryArray, setSubCatArray] = useState([]);
  // const [categoryArray, setCatArray] = useState([]);
  const catArray = [];
  collections.catalog.forEach(({category}) => {
    category.forEach(x => {
      if(!catArray.includes(x)) {
        catArray.push(x)
      }
    })
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
      if(category.includes(selectedCategory) && !tempArray.includes(subcategory)) {
        tempArray.push(subcategory)
      };
    })
    setSubCatArray([...tempArray])
    // console.log(selectedCategory, selectedSubcategory, subcategoryArray)
  }, [selectedCategory, collections.catalog])

  return (
    <div className='catalog-container'>
      <div className='categories'>
        <div className='category-button-container'>
          {
            catArray.map(x => (
              <div className="cat-button">
                <CustomButton value={x} onClick={() => {
                  setCategory(x)
                  setSubcategory('')
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
          itemsToDisplay.length > 0
          ?
          itemsToDisplay[0].items.map((item, i) => (
            <div key={i} className='catalog-item-card'>
            <span className='name'>{capital_letter(item["Name"])}</span>
            {
              (item["Name"] === "Hazure01" || item["Name"] === "Hazure02" || item["Name"] === "Hazure03") ? <div>no img</div>
              : selectedSubcategory === "recipes" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/DIYRecipeIcon/${item["DIY Icon Filename"]}.png)`}}/>
              : item["Back Color"] ?  <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MessageCard/${item["Filename"]}.png)`}}/>
              : item["Source"] === "Leif" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/ShopPlant/${item["Filename"]}.png)`}}/>
              : selectedSubcategory === "other" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Inventory Filename"]}.png)`}}/>
              : item["NH Jan"] ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
              : item["Category"] === "Door" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseDoorIcon/${item["Filename"]}.png)`}}/>
              : item["Category"] === "Mailbox" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HousePostIcon/${item["Filename"]}.png)`}}/>
              : item["Category"] === "Incline" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${item["Filename"]}.png)`}}/>
              : item["Category"] === "Roofing" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseRoofIcon/${item["Filename"]}.png)`}}/>
              : item["Category"] === "Siding" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseWallIcon/${item["Filename"]}.png)`}}/>
              : item["Category"] === "Bridge" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${item["Filename"]}.png)`}}/>
              : (item["Source Notes"] !== "Played by K.K. if you request something he doesn't have (does not give take-home track)" && selectedSubcategory === 'music') ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/Audio/${item["Filename"]}.png)`}}/>
              : item["Name"] === "magic bag" ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/SantaSack.png)`}}/>
              : <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${item["Filename"]}.png)`}}/>
            }
              <div className='info'>
                <span id='buy'>buy: {item["Buy"]}</span>
                <span id='sell'>sell: {item["Sell"]}</span>
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
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);