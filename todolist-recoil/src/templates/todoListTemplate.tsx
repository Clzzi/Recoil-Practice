import TodoInput from "components/todoInput";
import TodoList from "components/todoList";
import "./todoListTemplate.scss";
import '../reset.scss'; // 스타일 리셋

const TodoListTemplate = () => {
  return (
    <div className={"todoTemplate"}>
      <TodoInput /> 
      {/* 할일 적는 input */}
      <TodoList />
      {/* 할일들 리스트 */}
    </div>
  );
};

export default TodoListTemplate;
