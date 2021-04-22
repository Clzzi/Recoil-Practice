import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { filterTodosSelector } from "recoil/todosState";
import TodoItem from "components/TodoItem";
import { todosState } from "recoil/todosState";
import { TodoType } from "types/todoType";
import "./todoList.scss";

const TodoList = (): JSX.Element => {
  const filteredTodos = useRecoilValue(filterTodosSelector);
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);

  const onDelete = (id: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const onDone = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  return (
    <div className={"todoitemList"}>
      {filteredTodos.map((todo) => {
        const data = {
          id: todo.id,
          done: todo.done,
          contents: todo.contents,
        };

        return <TodoItem data={data} onDelete={onDelete} onDone={onDone} />;
      })}
    </div>
  );
};

export default TodoList;
