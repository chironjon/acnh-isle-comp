import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchfield } from '../../redux/input/input.selectors';

import ItemCard from '../item-card/item-card.component';

import './item-list.styles.scss';

const ItemList = ({list, searchfield}) => {
  //needs to break list down from [tags, items] to all items in one array
  const itemsToDisplay = [];
  console.log('list', list)
  // Object.entries(list).forEach(([category, items]) => {
  //   console.log(category, items)
  //   itemsToDisplay.push({...items})

    // return tags.toLowerCase().includes(searchfield.toLowerCase())
    // ? itemsToDisplay[tags] = items
    // : null
  // })

  console.log('itemsToDisplay', itemsToDisplay.length, itemsToDisplay)
  const sortedItems = list.sort((a, b) => {
    // console.log(a, b)
    let nameA = a[0].toUpperCase();
    let nameB = b[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      else if (nameA > nameB) {
        return 1;
      }
  })
  // const sortedItems = baseItemSet.sort((a, b) => {
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
  return (
    <div className='item-list-container'>
      {
        sortedItems.length !== 0 ?
        sortedItems.map(([name, {group, type}]) => {
              // console.log(name, group, type)
              return (
                <ItemCard name={name} item={group} itemType={type}  />
              )
            })
        : null
        // list.map(([category, group]) => {
        //   // console.log(group)
        //   return Object.entries(group).map(([name, {group, type}]) => {
        //     // console.log(name, group, type)
        //     return (
        //       <ItemCard name={name} item={group} itemType={category}  />
        //     )
        //   })
        // })
        // : <div>Nothing Matches</div>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  searchfield: selectSearchfield
})

export default connect(mapStateToProps)(ItemList);