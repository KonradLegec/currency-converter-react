import "./style.css";

const InputSection = ({title}) => (
    <label>
    <span className="form__inputLabel">{title}</span>
    <input
      type="number"
      required
      placeholder="np. 25.50"
    />
  </label>
);

export default InputSection;