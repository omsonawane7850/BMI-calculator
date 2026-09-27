import { useEffect, useState } from "react";
import "./App.css";

import UnitSwitch from "./components/UnitSwitch";
import BmiForm from "./components/BmiForm";
import BmiResult from "./components/BmiResult";
import BmiHistory from "./components/BmiHistory";

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

    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("bmiHistory", JSON.stringify(history));
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
      const heightInMeter = height / 100;

      calculatedBMI = weight / (heightInMeter * heightInMeter);
    } else {
      calculatedBMI = (weight / (height * height)) * 703;
    }

    const finalBMI = Number(calculatedBMI.toFixed(1));

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

    const newResult = {
      id: Date.now(),
      bmi: finalBMI,
      category: category,
      range: bmiRange,
      unit: unit,
    };

    setHistory((prevHistory) => [newResult, ...prevHistory]);
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
    setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>BMI Calculator</h1>

        <p className="subtitle">Calculate your Body Mass Index</p>

        <UnitSwitch unit={unit} changeUnit={changeUnit} />

        <BmiForm
          unit={unit}
          weight={weight}
          height={height}
          setWeight={setWeight}
          setHeight={setHeight}
          calculateBMI={calculateBMI}
          clearForm={clearForm}
        />

        <BmiResult bmi={bmi} message={message} range={range} />

        <BmiHistory
          history={history}
          clearHistory={clearHistory}
          deleteHistory={deleteHistory}
        />
      </div>
    </div>
  );
}

export default App;
