import "./styles.scss";
interface Props {
  name: string;
  id: number;
  color: string;
  onChange(id: number, value: string): void;
  onDelete(id: number): void;
}

export const Todo = ({ name, id, color, onChange, onDelete }: Props) => (
  <div className="todo-wrapper">
    <input
      value={name}
      key={id}
      style={{ backgroundColor: color }}
      onChange={(e) => onChange(id, e.target.value)}
    ></input>
    <i className="fa fa-trash fa-2x" onClick={() => onDelete(id)}></i>
  </div>
);
