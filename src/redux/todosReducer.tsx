import { ADD_TODO } from "./actionTypes";

interface Action {
  type: string;
  payload: any;
}

export interface TodoItem {
  name: string;
  color: string;
  id: Number;
}

interface TodoState {
  todos: Array<TodoItem>;
}

const initialState: TodoState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos],
      };

    default:
      return state;
  }
};
