import "./style.css";

const Fieldset = ({body, legend, additional}) => (
  <fieldset className="form__fieldset">
    <legend className="form__legend">{legend}</legend>
    {body}
    {additional}
  </fieldset>
);

export default Fieldset;
