import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../redux/rootReducer";
import { TodoItem } from "../../redux/todosReducer";
import { deleteTodo, editTodo } from "../../redux/actions";

export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="main-todos-wrapper">
      <div className="todos-wrapper">
        {todos.map((item: TodoItem) => {
          return (
            <div className="todo-wrapper">
              <input
                value={item.name}
                key={item.id}
                style={{ backgroundColor: item.color }}
                onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
              ></input>
              <i
                className="fa fa-trash fa-2x"
                onClick={() => dispatch(deleteTodo(item.id))}
              ></i>
            </div>
          );
        })}
      </div>
      <button onClick={() => history.push("/form")}>BACK</button>
    </div>
  );
};
