import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../redux/rootReducer";
import { deleteTodo, editTodo } from "../../redux/todos/actions";
import { useCallback } from "react";

export const useTodosHook = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const history = useHistory();

  const editTodoHandler = useCallback(
    (id: number, name: string) => {
      dispatch(editTodo(id, name));
    },
    [dispatch]
  );

  const deleteTodoHandler = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );
  return {
    todos,
    history,
    editTodoHandler,
    deleteTodoHandler,
  };
};
