import getRandomInt from 'helpers/getRandomInt'
import { ADD_TODO } from 'constants/todoConsts';

export default function addTodo(text) {
  return {
    type: ADD_TODO,
    id: getRandomInt(1, 100000000000000),
    text,
  }
}