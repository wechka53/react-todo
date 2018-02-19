import { combineReducers } from 'redux';
import { reducer as todos } from 'redusers/todo';

export default combineReducers({
  todos,
});
