import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [unit, setUnit] = useState("metric");

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [range, setRange] = useState("");

  // Get history from localStorage
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("bmiHistory");

    return savedHistory
      ? JSON.parse(savedHistory)
      : [];
  });

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem(
      "bmiHistory",
      JSON.stringify(history)
    );
  }, [history]);

  const calculateBMI = (event) => {
    event.preventDefault();

    if (weight === "" || height === "") {
      alert("Please enter weight and height");
      return;
    }

    if (weight <= 0 || height <= 0) {
      alert("Weight and height must be greater than 0");
      return;
    }

    let calculatedBMI;

    if (unit === "metric") {
      // Weight = kg
      // Height = cm

      const heightInMeter = height / 100;

      calculatedBMI =
        weight / (heightInMeter * heightInMeter);
    } else {
      // Weight = lbs
      // Height = inches

      calculatedBMI =
        (weight / (height * height)) * 703;
    }

    const finalBMI = Number(
      calculatedBMI.toFixed(1)
    );

    setBmi(finalBMI);

    let category;
    let bmiRange;

    if (finalBMI < 18.5) {
      category = "Underweight";
      bmiRange = "Below 18.5";
    } else if (finalBMI < 25) {
      category = "Normal weight";
      bmiRange = "18.5 - 24.9";
    } else if (finalBMI < 30) {
      category = "Overweight";
      bmiRange = "25 - 29.9";
    } else {
      category = "Obese";
      bmiRange = "30+";
    }

    setMessage(category);
    setRange(bmiRange);

    // Create history object
    const newResult = {
      id: Date.now(),
      bmi: finalBMI,
      category: category,
      range: bmiRange,
      unit: unit,
    };

    // Add new result to history
    setHistory((prevHistory) => [
      newResult,
      ...prevHistory,
    ]);
  };

  const clearForm = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
    setRange("");
  };

  const changeUnit = (newUnit) => {
    setUnit(newUnit);
    clearForm();
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const deleteHistory = (id) => {
    setHistory((prevHistory) =>
      prevHistory.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="container">
      <div className="calculator">

        <h1>BMI Calculator</h1>

        <p className="subtitle">
          Calculate your Body Mass Index
        </p>

        {/* Unit Switch */}

        <div className="unit-switch">

          <button
            className={
              unit === "metric"
                ? "active"
                : ""
            }
            onClick={() =>
              changeUnit("metric")
            }
          >
            Metric
          </button>

          <button
            className={
              unit === "us"
                ? "active"
                : ""
            }
            onClick={() =>
              changeUnit("us")
            }
          >
            US Units
          </button>

        </div>

        {/* Form */}

        <form onSubmit={calculateBMI}>

          <div className="input-group">

            <label>
              Weight (
              {unit === "metric"
                ? "kg"
                : "lbs"}
              )
            </label>

            <input
              type="number"
              min="0"
              step="any"
              placeholder={`Enter weight in ${
                unit === "metric"
                  ? "kg"
                  : "lbs"
              }`}
              value={weight}
              onChange={(event) =>
                setWeight(
                  event.target.value
                )
              }
            />

          </div>

          <div className="input-group">

            <label>
              Height (
              {unit === "metric"
                ? "cm"
                : "in"}
              )
            </label>

            <input
              type="number"
              min="0"
              step="any"
              placeholder={`Enter height in ${
                unit === "metric"
                  ? "cm"
                  : "in"
              }`}
              value={height}
              onChange={(event) =>
                setHeight(
                  event.target.value
                )
              }
            />

          </div>

          <div className="buttons">

            <button
              className="calculate-btn"
              type="submit"
            >
              Calculate BMI
            </button>

            <button
              className="clear-btn"
              type="button"
              onClick={clearForm}
            >
              Clear
            </button>

          </div>

        </form>

        {/* Result */}

        {bmi && (
          <div className="result">

            <p>Your BMI is</p>

            <h2>{bmi}</h2>

            <h3>{message}</h3>

            <p>
              BMI Range: {range}
            </p>

          </div>
        )}

        {/* History */}

        <div className="history">

          <div className="history-header">

            <h2>BMI History</h2>

            {history.length > 0 && (
              <button
                onClick={clearHistory}
              >
                Clear History
              </button>
            )}

          </div>

          {history.length === 0 ? (

            <p className="empty">
              No BMI history yet.
            </p>

          ) : (

            history.map((item) => (

              <div
                className="history-item"
                key={item.id}
              >

                <div>

                  <strong>
                    {item.bmi}
                  </strong>

                  <span>
                    {item.category}
                  </span>

                  <small>
                    Range: {item.range}
                  </small>

                </div>

                <button
                  onClick={() =>
                    deleteHistory(item.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default App;