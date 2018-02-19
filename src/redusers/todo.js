import { initialState } from 'constants/todoInitialState'
import { ADD_TODO } from 'constants/todoConsts'
import { REMOVE_TODO, UPDATE_TODO } from '../constants/todoConsts';


const actionsMap = {
  [ADD_TODO]: (state, action) => [
    ...state,
    {
      id: action.id,
      text: action.text,
    },
  ],
  [REMOVE_TODO]: (state, action) => state.filter(todo => todo.id !== action.id),
  [UPDATE_TODO]: (state, action) => state.map(todo => {
    if (todo.id === action.id) {
      todo.text = action.text;
    }

    return todo;
  }),
};

export function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}


