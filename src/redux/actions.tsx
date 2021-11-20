import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";
import { TodoItem } from "./todosReducer";

export const addTodo = (todo: TodoItem) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id: number, value: string) => ({
  type: EDIT_TODO,
  payload: { id, value },
});
