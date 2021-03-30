import InfoActionTypes from './info.types';

export const toggleInfoHidden = () => ({
  type: InfoActionTypes.TOGGLE_INFO_HIDDEN
});

export const selectInfo = payload => ({
  type: InfoActionTypes.SELECT_INFO,
  payload
})