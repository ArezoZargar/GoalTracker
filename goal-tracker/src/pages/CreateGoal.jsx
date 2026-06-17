function CreateGoal() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Goal</h1>

      <form>
        <input
          placeholder="Title"
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          placeholder="Category"
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Target"
          style={{ display: "block", marginBottom: "10px" }}
        />

        <button>Create Goal</button>
      </form>
    </div>
  );
}

export default CreateGoal;