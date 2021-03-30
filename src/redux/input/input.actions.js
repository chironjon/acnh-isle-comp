import InputActionTypes from './input.types';

export const setCategory = selectedCategory => ({
  type: InputActionTypes.SET_CATEGORY,
  payload: selectedCategory
})

export const setFilter = selectedFilter => ({
  type: InputActionTypes.SET_FILTER,
  payload: selectedFilter
})

export const setCatArray = categoryArray => ({
  type: InputActionTypes.SET_CAT_ARRAY,
  payload: categoryArray
})

export const setFilterArray = filterArray => ({
  type: InputActionTypes.SET_FILTER_ARRAY,
  payload: filterArray
})

export const searchfieldChange = searchfield => ({
  type: InputActionTypes.SEARCHFIELD_CHANGE,
  payload: searchfield
})

export const filterItems = payload => ({
  type: InputActionTypes.FILTER_ITEMS,
  payload
})

export const sortItems = payload => ({
  type: InputActionTypes.SORT_ITEMS,
  payload
})

// export const toggleInfoHidden = () => ({
//   type: InfoActionTypes.TOGGLE_INFO_HIDDEN
// });