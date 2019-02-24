import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  ajaxCallsInProgress
});
export default rootReducer;

