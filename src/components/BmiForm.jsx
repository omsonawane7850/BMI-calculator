function BmiForm({
  unit,
  weight,
  height,
  setWeight,
  setHeight,
  calculateBMI,
  clearForm,
}) {
  return (
    <form onSubmit={calculateBMI}>
      <div className="input-group">
        <label>Weight ({unit === "metric" ? "kg" : "lbs"})</label>

        <input
          type="number"
          min="0"
          step="any"
          placeholder={`Enter weight in ${unit === "metric" ? "kg" : "lbs"}`}
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Height ({unit === "metric" ? "cm" : "in"})</label>

        <input
          type="number"
          min="0"
          step="any"
          placeholder={`Enter height in ${unit === "metric" ? "cm" : "in"}`}
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button className="calculate-btn" type="submit">
          Calculate BMI
        </button>

        <button className="clear-btn" type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default BmiForm;
