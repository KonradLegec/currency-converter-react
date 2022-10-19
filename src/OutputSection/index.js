import "./style.css";

const OutputSection = ({title, body}) => (
  <label>
    <span className="form__inputLabel">{title}</span>
    <input value="0" readonly />
    {body}
  </label>
);

export default OutputSection;
