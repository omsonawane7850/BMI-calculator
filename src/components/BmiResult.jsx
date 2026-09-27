function BmiResult({ bmi, message, range }) {
  if (!bmi) {
    return null;
  }

  return (
    <div className="result">
      <p>Your BMI is</p>

      <h2>{bmi}</h2>

      <h3>{message}</h3>

      <p>BMI Range: {range}</p>
    </div>
  );
}

export default BmiResult;
