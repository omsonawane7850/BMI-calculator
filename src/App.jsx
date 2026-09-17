import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHight] = useState("");
  const [bmi, setBmi] = useState("");
  const [messege, setMessege] = useState("");

  let calBmi = (event) => {
    event.preventDefault();
    if (weight === "" || height === "") {
      alert("Enter a Valid Weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // BMI category
      if (bmi < 18.5) {
        setMessege("You are Underweight");
      } else if (bmi < 25) {
        setMessege("You have Normal weight");
      } else if (bmi < 30) {
        setMessege("You are Overweight");
      } else {
        setMessege("You are Obese");
      }
    }
    //reload
  };
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>BMI calculator</h2>

      <form onSubmit={calBmi}>
        {" "}
        <div>
          <label>weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter your weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
          <label>height (in)</label>
          <input
            type="text"
            placeholder="Enter your height"
            value={height}
            onChange={(event) => setHight(event.target.value)}
          />
        </div>
        <div>
          <button className="btn">Submit</button>
          <button className="btn btn-outline" type="button" onClick={reload}>
            reload
          </button>
        </div>
        <div className="messege">
          <h3>Your BMI is: {bmi}</h3>
          <p>{messege}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
