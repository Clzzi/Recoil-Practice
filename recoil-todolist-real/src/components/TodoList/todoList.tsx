import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  todosState,
  filterTodosState,
  filterTodosSelector,
} from "recoil/todosState";

const TodoList = () => {
  // const [todos, setTodo] = useRecoilState(todosState);
  const todos = useRecoilValue(filterTodosSelector);

  return (
    <div>
      {todos.map((todo) => {
        return <div>{todo.contents}</div>;
      })}
    </div>
  );
};

export default TodoList;
