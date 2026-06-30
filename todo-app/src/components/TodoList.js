import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;