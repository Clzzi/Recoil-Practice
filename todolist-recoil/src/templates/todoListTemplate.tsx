import TodoInput from "components/todoInput";
import TodoList from "components/todoList";
import "./todoListTemplate.scss";
import '../reset.scss';

const TodoListTemplate = () => {
  return (
    <div className={"todoTemplate"}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoListTemplate;
