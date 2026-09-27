function UnitSwitch({ unit, changeUnit }) {
  return (
    <div className="unit-switch">
      <button
        className={unit === "metric" ? "active" : ""}
        onClick={() => changeUnit("metric")}
      >
        Metric
      </button>

      <button
        className={unit === "us" ? "active" : ""}
        onClick={() => changeUnit("us")}
      >
        US Units
      </button>
    </div>
  );
}

export default UnitSwitch;
