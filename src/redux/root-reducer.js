import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducers';

export default combineReducers({
  directory: directoryReducer
})