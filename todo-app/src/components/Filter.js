function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("All")}>
        All
      </button>

      <button onClick={() => setFilter("Completed")}>
        Completed
      </button>

      <button onClick={() => setFilter("Pending")}>
        Pending
      </button>
    </div>
  );
}

export default Filter;