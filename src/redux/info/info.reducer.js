import InfoActionTypes from './info.types'

const INITIAL_STATE = {
  hidden: true,
  selectedItemInfo: []
};

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InfoActionTypes.TOGGLE_INFO_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case InfoActionTypes.SELECT_INFO:
      return {
        ...state,
        selectedItemInfo: [action.payload]
      } 
    default:
        return state;
  }
}

export default infoReducer;