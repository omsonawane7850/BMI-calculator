function BmiHistory({
  history,
  clearHistory,
  deleteHistory,
}) {
  return (
    <div className="history">

      <div className="history-header">

        <h2>BMI History</h2>

        {history.length > 0 && (
          <button onClick={clearHistory}>
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
  );
}

export default BmiHistory;