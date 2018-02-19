import { REMOVE_TODO } from 'constants/todoConsts';

export default function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id,
  }
}