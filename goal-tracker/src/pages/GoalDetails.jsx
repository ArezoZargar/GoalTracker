import { useParams } from "react-router-dom";

function GoalDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Goal Details</h1>

      <p>ID : {id}</p>

      <button>Add Progress</button>
      <button>Edit</button>
      <button>Complete</button>
    </div>
  );
}

export default GoalDetails;