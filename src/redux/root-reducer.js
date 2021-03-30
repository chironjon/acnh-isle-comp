import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';
import userReducer from './user/user.reducer';
import infoReducer from './info/info.reducer';
import inputReducer from './input/input.reducer';

export default combineReducers({
  directory: directoryReducer,
  collections: collectionReducer,
  user: userReducer,
  info: infoReducer,
  input: inputReducer
})