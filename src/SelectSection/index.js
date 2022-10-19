const SelectSection = ({title}) => (
  <label>
    <span className="form__inputLabel">{title}</span>
    <select name="initialCurrency">
      <option value="EUR">EUR Euro</option>
      <option value="PLN">PLN Złoty polski</option>
      <option value="CAD">CAD Dolar kanadyjski</option>
      <option value="HRK">HRK Kuna chorwacka</option>
    </select>
  </label>
);

export default SelectSection;