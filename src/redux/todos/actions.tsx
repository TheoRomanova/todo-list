import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";
import {
  TodoItem,
  AddTodoAction,
  EditTodoAction,
  DeleteTodoAction,
} from "./types";

export const addTodo = (todo: TodoItem): AddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (id: number, value: string): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, name: value },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});
