import { combineReducers } from 'redux';
import forumReducer from './forumReducers';

const rootReducer = combineReducers({
  forum: forumReducer,
});

export default rootReducer;
