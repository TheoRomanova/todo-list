import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../redux/rootReducer";
import { TodoItem } from "../../redux/todosReducer";
import { deleteTodo } from "../../redux/actions";
export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="main-todos-wrapper">
      <ul className="todos-wrapper">
        {todos.map((item: TodoItem) => {
          return (
            <div className="todo-wrapper">
              <li key={item.id} style={{ backgroundColor: item.color }}>
                {item.name}
              </li>
              <i
                className="fa fa-trash fa-2x"
                onClick={() => handleDelete(item.id)}
              ></i>
            </div>
          );
        })}
      </ul>
      <button onClick={() => history.push("/form")}>BACK</button>
    </div>
  );
};
