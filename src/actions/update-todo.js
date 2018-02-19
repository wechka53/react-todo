import { UPDATE_TODO } from 'constants/todoConsts';

export default function updateTodo(id, newValue) {
  return {
    type: UPDATE_TODO,
    id: id,
    text: newValue,
  }
}