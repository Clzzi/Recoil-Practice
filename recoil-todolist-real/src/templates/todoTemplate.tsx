import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";
import './todoTemplate.scss';

const TodoTemplate = () => {
  return (
    <div className={'todoTemplate'}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoTemplate;