import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [messege, setMessege] = useState("");

  return (
    <div className="container">
      <h2>BMI calculator</h2>
      <form>
        {" "}
        <div>
          <label>weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter your weight"
            value={weight}
            onChange={(event) => event.target.value}
          />
          <label>height (in)</label>
          <input
            type="text"
            placeholder="Enter your height"
            value={height}
            onChange={(event) => event.target.value}
          />
        </div>
        <div>
          <button className="btn">Submit</button>
          <button className="btn btn-outline">reload</button>
        </div>
        <div className="messege">
          <h3>Your BMI is:</h3>
          <p>messege</p>
        </div>
      </form>
    </div>
  );
}

export default App;
