import "./styles.scss";
interface Props {
  value: string;
  onChange(value: string): void;
  onSubmit(value: string): void;
}

export const Form = ({ value, onChange, onSubmit }: Props) => (
  <div className="form-wrapper">
    <input value={value} onChange={(e) => onChange(e.target.value)}></input>
    <button onClick={() => onSubmit(value)}>+</button>
  </div>
);
