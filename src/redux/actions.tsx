import { ADD_TODO } from "./actionTypes";
import { TodoItem } from "./todosReducer";

export const addTodo = (todo: TodoItem) => ({
  type: ADD_TODO,
  payload: { todo },
});
