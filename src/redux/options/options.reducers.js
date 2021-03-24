import OptionsActionTypes from './options.types'

const INITIAL_STATE = {
  'catalog': {
    'selectedCategory': '',
    'selectedSubcategory': '',
    'categoryArray': [],
    'subcategoryArray': []
  }
}

const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OptionsActionTypes.SET_CATEGORY:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          selectedCategory: action.payload
        }
      }
    case OptionsActionTypes.SET_SUBCATEGORY:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          selectedSubcategory: action.payload
        }
      }
    case OptionsActionTypes.SET_CAT_ARRAY:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          categoryArray: action.payload
        }
      }
    case OptionsActionTypes.SET_SUBCAT_ARRAY:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          subcategoryArray: action.payload
        }
      }
    default:
      return state;
  }
};

export default optionsReducer;