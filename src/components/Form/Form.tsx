import { useCallback } from "react";
import "./styles.scss";
interface Props {
  value: string;
  onChange(value: string): void;
  onSubmit(value: string): void;
}

export const Form = ({ value, onChange, onSubmit }: Props) => {
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);
  const handleSubmit = useCallback(() => onSubmit(value), [onSubmit, value]);

  return (
    <div className="form-wrapper">
      <input value={value} onChange={handleChange}></input>
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};
