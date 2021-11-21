import {ADD_TODO, EDIT_TODO, DELETE_TODO} from './actionTypes';

  export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: TodoItem;
  }

  export interface EditTodoAction {
    type: typeof EDIT_TODO,
    payload: {id: number, name: string}
  }

  export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
   payload: number
}

  export interface TodoItem {
    name: string;
    color: string;
    id: number;
  }
  
  export interface TodoState {
    todos: Array<TodoItem>;
  }
  
  export type TodoReducerActions = AddTodoAction | EditTodoAction | DeleteTodoAction

