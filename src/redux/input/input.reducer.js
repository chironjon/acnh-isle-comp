import InputActionTypes from './input.types';

const INITIAL_STATE = {
  'categories': {
    'selectedCategory': 'clothing',
    'categoryArray': []
  },
  'sortPage': {
    'sort': 'name',
    'order': 'A⥮Z',
    'perPage': 10,
  },
  'filters': {
    'searchfield': '',
    'selectedFilter': '',
    'filterArray': [],
  }
}
//filter states, include, exclude and off
// A⥯Z A⥮Z  ⥥  ⥣  ⥌  ⥍
const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.PICK_CATEGORY:
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
    case InputActionTypes.SET_FILTER_ARRAY:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterArray: action.payload
        }
      };
    case InputActionTypes.TOGGLE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedFilter: action.payload
        }
      };
    case InputActionTypes.SEARCHFIELD_CHANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          searchfield: action.payload
        }
      };
    case InputActionTypes.LOAD_ITEMS:
      return {
        ...state
      }
    case InputActionTypes.SET_SORT_BY:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default inputReducer;