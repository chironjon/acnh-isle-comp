import InputActionTypes from './input.types';

const INITIAL_STATE = {
  'categories': {
    'selectedCategory': '',
    'categoryArray': []
  },
  'input': {
    'searchfield': '',
    'selectedFilter': '',
    'filterArray': []
  }
}

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.FILTER_ITEMS:
      return {
        ...state
      }
    case InputActionTypes.SORT_ITEMS:
      return {
        ...state
      }
    case InputActionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          selectedCategory: action.payload,
        }
      };
    case InputActionTypes.SET_CAT_ARRAY:
      return {
        ...state,
        categories: {
          ...state.categories,
          categoryArray: action.payload
        }
      };
    case InputActionTypes.SEARCHFIELD_CHANGE:
      return {
        ...state,
        input: {
          ...state.input,
          searchfield: action.payload
        }
      };
    case InputActionTypes.SET_FILTER:
      return {
        ...state,
        input: {
          ...state.input,
          selectedFilter: action.payload
        }
      };
    case InputActionTypes.SET_FILTER_ARRAY:
      return {
        ...state,
        input: {
          ...state.input,
          filterArray: action.payload
        }
      };
    default:
      return state;
  }
}

export default inputReducer;