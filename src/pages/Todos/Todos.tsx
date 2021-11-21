import "./styles.scss";

import { TodoItem } from "../../redux/todos/types";
import { Todo } from "../../components/Todo/Todo";
import { useTodosHook } from "./useTodosHook";

export const Todos = () => {
  const { todos, history, editTodoHandler, deleteTodoHandler } = useTodosHook();
  return (
    <div className="main-todos-wrapper">
      <div className="todos-wrapper">
        {todos.map((item: TodoItem) => {
          return (
            <Todo
              name={item.name}
              id={item.id}
              color={item.color}
              onChange={editTodoHandler}
              onDelete={deleteTodoHandler}
            />
          );
        })}
      </div>
      <button onClick={() => history.push("/home")}>BACK</button>
    </div>
  );
};
