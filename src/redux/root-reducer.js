import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducers';
import collectionReducer from './collection/collection.reducers';
import userReducer from './user/user.reducers';
import infoReducer from './info/info.reducer';

export default combineReducers({
  directory: directoryReducer,
  collections: collectionReducer,
  user: userReducer,
  info: infoReducer
})