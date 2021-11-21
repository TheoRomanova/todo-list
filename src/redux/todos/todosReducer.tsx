import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";
import { TodoReducerActions, TodoState } from "./types";

const initialState: TodoState = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodoReducerActions
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case EDIT_TODO:
      const updatedArray = [...state.todos];
      const editedItem = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      updatedArray[editedItem].name = action.payload.name;
      return {
        ...state,
        todos: updatedArray,
      };
    default:
      return state;
  }
};
