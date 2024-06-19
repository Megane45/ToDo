import { useNavigate } from "react-router-dom";

import connexion from "../services/connexion";

function Todo({ task, id }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/tasks/${id}`);
      navigate(".", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`todo ${task.completed ? "completed" : ""}`}>
      <h2>{task.task}</h2>
      <h4>Who {task.who}</h4>
      <p>DeadLine {task.deadline}</p>
      <p>Status: {task.status}</p>
      <button type="button" value={task.id} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
