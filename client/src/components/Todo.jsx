import connexion from "../services/connexion";

function Todo({ task, id }) {
  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/tasks/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>{task.task}</h2>
      <h4>Who {task.who}</h4>
      <p>DeadLine {task.deadline}</p>
      <p>Status: {task.status}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
