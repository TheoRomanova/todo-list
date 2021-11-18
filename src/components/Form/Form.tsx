import "./styles.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { colors } from "./colors";
import { TodoItem } from "../../redux/todosReducer";
import { addTodo } from "../../redux/actions";

export const Form = () => {
  const [todo, setTodo] = useState<string>("");
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    if (value) {
      let newTodo: TodoItem = {
        name: value.toUpperCase(),
        color: colors[Math.floor(Math.random() * 20)],
        id: Date.now(),
      };
      console.log(newTodo);
      dispatch(addTodo(newTodo));
      setTodo("");
    }
  };

  return (
    <div className="main-notes-wrapper">
      <h1>FORM</h1>
      <div className="input-wrapper">
        <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={() => handleClick(todo)}>+</button>
      </div>
    </div>
  );
};
