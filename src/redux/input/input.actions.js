import InputActionTypes from './input.types';

export const pickCategory = payload => ({
  type: InputActionTypes.PICK_CATEGORY,
  payload
})

export const setCatArray = payload => ({
  type: InputActionTypes.SET_CAT_ARRAY,
  payload
})

export const setFilterArray = payload => ({
  type: InputActionTypes.SET_FILTER_ARRAY,
  payload
})

export const toggleFilter = payload => ({
  type: InputActionTypes.TOGGLE_FILTER,
  payload
})

export const searchfieldChange = payload => ({
  type: InputActionTypes.SEARCHFIELD_CHANGE,
  payload
})

export const loadItems = payload => ({
  type: InputActionTypes.LOAD_ITEMS,
  payload
})

export const setSortBy = payload => ({
  type: InputActionTypes.SET_SORT_BY,
  payload
})

// export const toggleInfoHidden = () => ({
//   type: InfoActionTypes.TOGGLE_INFO_HIDDEN
// });