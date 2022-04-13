import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { addTodo, deleteTodo } from '../Redux/index'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const addTodoForm = (task) => {
    dispatch(addTodo(task))
  };

  const deleteTodoForm = (index) => {
    dispatch(deleteTodo(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodoForm} />
      <TodoList todos={todos} deleteTodo={deleteTodoForm} />
    </div>
  );
}

export default Todo;