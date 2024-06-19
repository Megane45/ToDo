import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import Select from "./Form/Select";

const initialTask = {
  task: "",
  who: "",
  deadline: "",
  id_status: "",
};

function Form() {
  const [task, setTask] = useState(initialTask);
  const navigate = useNavigate();

  const handleTask = (event) => {
    setTask((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/tasks", task);
      navigate(".", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <label>
        Task:
        <input
          type="text"
          value={task.task}
          name="task"
          onChange={(event) => handleTask(event)}
          required
        />
      </label>
      <label>
        Who:
        <input
          type="text"
          value={task.who}
          onChange={(event) => handleTask(event)}
          name="who"
          required
        />
      </label>
      <label>
        DeadLine:
        <input
          type="text"
          value={task.deadline}
          onChange={(event) => handleTask(event)}
          name="deadline"
          required
        />
      </label>
      <Select handleForm={handleTask} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
