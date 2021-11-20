import { ADD_TODO, DELETE_TODO } from "./actionTypes";

interface Action {
  type: string;
  payload: any;
}

export interface TodoItem {
  name: string;
  color: string;
  id: number;
}

interface TodoState {
  todos: Array<TodoItem>;
}

const initialState: TodoState = {
  todos: [],
};

//Редактирование, CSS порядок, push в мастер ветку
export const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
