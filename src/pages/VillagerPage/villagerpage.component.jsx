import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import ItemList from '../../components/item-list/item-list.component';

import { selectVillagers } from '../../redux/collection/collection.selectors'

import './villagerpage.styles.scss';
function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const VillagerPage = ({villagers}) => {
  const [selectedCategory, setCategory] = useState('');
  const catArray = [];
  villagers.forEach(x => {
    if(!catArray.includes(x.subcategory)) {
      catArray.push(x.subcategory)
    }
  })
  
  const itemsToDisplay = villagers.filter(x => {
    return x.subcategory === selectedCategory
  })
  
  // useEffect(() => {
  // }, [])

  return (
    <div className='villager-container'>
      <div className='categories'>
        <div className='category-button-container'>
          {
            catArray.map(x => (
              <div className="cat-button">
                <CustomButton value={x} onClick={() => {
                  setCategory(x)
                }}>{x}</CustomButton>
              </div>
            ))
          }
        </div>
      </div>
      <div className='scroll-container'>
          { itemsToDisplay.length > 0
            ?
            itemsToDisplay[0].items.map((item, i) => (
              <div key={i} className='catalog-item-card'>
              {
                selectedCategory === 'villagers' ? <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/NpcIcon/${item["Filename"]}.png)`}}/>
                : <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/NpcPoster/${item["Photo Filename"]}.png)`}}/>
              }
              <span className='name'>{item["Name"]}</span>
              </div>
            ))
            : null
          }
      </div>

    
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  villagers: selectVillagers
});

export default connect(mapStateToProps)(VillagerPage);