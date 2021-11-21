import "./styles.scss";

import { Form } from "../../components/Form/Form";
import { useHomeHook } from "./useHomeHook";

export const Home = () => {
  const { history, todo, setTodo, handleClickAdd } = useHomeHook();

  return (
    <div className="main-home-wrapper">
      <div className="home-wrapper">
        <span>Add New Todo</span>
        <Form value={todo} onChange={setTodo} onSubmit={handleClickAdd} />
      </div>
      <button onClick={() => history.push("/todos")}>TODOS</button>
    </div>
  );
};
