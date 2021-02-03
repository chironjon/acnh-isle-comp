import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducers';
import collectionReducer from './collection/collection.reducers';


export default combineReducers({
  directory: directoryReducer,
  collections: collectionReducer
})