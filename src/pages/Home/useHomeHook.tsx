import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { colors } from "./colors";
import { TodoItem } from "../../redux/todos/types";
import { addTodo } from "../../redux/todos/actions";

export const useHomeHook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>("");

  const handleClickAdd = useCallback(
    (value: string) => {
      if (value) {
        let newTodo: TodoItem = {
          name: value.toUpperCase(),
          color: colors[Math.floor(Math.random() * 20)],
          id: Date.now(),
        };
        dispatch(addTodo(newTodo));
        setTodo("");
      }
    },
    [dispatch]
  );
  return {
    history,
    todo,
    handleClickAdd,
    setTodo,
  };
};
