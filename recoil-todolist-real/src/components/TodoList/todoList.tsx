import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { filterTodosSelector } from "recoil/todosState";
import TodoItem from "components/TodoItem";
import { todosState } from "recoil/todosState";
import './todoList.scss';

const TodoList = () => {
  const filteredTodos = useRecoilValue(filterTodosSelector);
  
  const onDelete = (id: number): void => {
    console.log(id);
  }
  
  const onDone = (id: number): void => {
    console.log(id);
  }

  return (
    <div className = {'todoitemList'}>
      {filteredTodos.map((todo) => {
        
        const data = {
          id: todo.id,
          done: todo.done,
          contents: todo.contents
        };

        return (
          <TodoItem data={data} onDelete={onDelete} onDone={onDone} />
        );
      })}
    </div>
  );
};

export default TodoList;
