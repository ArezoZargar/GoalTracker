function Goals() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>All Goals</h1>

      <input
        placeholder="Search Goal..."
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "20px"
        }}
      />

      <div style={{ marginTop: "30px" }}>
        <h3>React Study</h3>
        <p>Progress: 60%</p>

        <button>Edit</button>
        <button>Pause</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Goals;