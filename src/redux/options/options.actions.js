import OptionsActionTypes from './options.types';

// export const toggleInfoHidden = () => ({
//   type: InfoActionTypes.TOGGLE_INFO_HIDDEN
// });

export const setCategory = selectedCategory => ({
  type: OptionsActionTypes.SET_CATEGORY,
  payload: selectedCategory
})

export const setSubcategory = selectedSubcategory => ({
  type: OptionsActionTypes.SET_SUBCATEGORY,
  payload: selectedSubcategory
})

export const setCatArray = categoryArray => ({
  type: OptionsActionTypes.SET_CAT_ARRAY,
  payload: categoryArray
})

export const setSubcatArray = subcategoryArray => ({
  type: OptionsActionTypes.SET_SUBCAT_ARRAY,
  payload: subcategoryArray
})