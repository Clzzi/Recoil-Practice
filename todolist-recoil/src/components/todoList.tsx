import React, { useEffect } from "react";
import TodoItem from "components/todoItem";
import { useRecoilState } from "recoil";
import { TodoType, todoState } from "recoil/Todo";
import './todoList.scss';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(todoState);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const doneChange = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  const deleteItem = (id: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    );
  }

  return (
    <div className={"todoList-wrapper"}>
      {todos.length ? (
        todos.map((todo: TodoType) => {
          return (
            <TodoItem
              key={todo.id}
              contents={todo.contents}
              done={todo.done}
              id={todo.id}
              deleteItem={deleteItem}
              doneChange={doneChange}
            />
          );
        })
      ) : (
        <div>노투두</div>
      )}
    </div>
  );
};

export default TodoList;
