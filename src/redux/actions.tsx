import { ADD_TODO, DELETE_TODO } from "./actionTypes";
import { TodoItem } from "./todosReducer";

export const addTodo = (todo: TodoItem) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});
