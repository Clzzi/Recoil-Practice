import React, { useEffect } from "react";
import TodoItem from "components/todoItem";
import { useRecoilState } from "recoil";
import { TodoType, todoState } from "recoil/Todo";
import './todoList.scss';

const TodoList = (): JSX.Element => { 
  // todosState atom의 get변수와 setter 함수를 가져온다
  const [todos, setTodos] = useRecoilState<TodoType[]>(todoState);

  const doneChange = (id: number): void => {
    // 완료했는지 판별하기 위한 함수로, 해당 할일의 id를 받아온다.
    // 그런 후 setter함수를 이용해 모든 할일.map으로 받아온 id에 해당하는 todo의 done값을 반대로 바꿔준다
    // 만약 없다면 그냥 todo를 리턴함, 있다면 스프레드 연산자를 이용해 done말고 다른 값들은 복사해 유지하면서 done값만 유지 가능
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  // 할일삭제 함수는 id를 받아와서 setTodos에 할일들중 id가 같은것 빼고 다 return해주는것
  const deleteItem = (id: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    );
  }

  return (
    <div className={"todoList-wrapper"}>
      {/* 할일들의 길이가 없다면 할일이 없는것이므로 노투두 선언 아니면 TodoItem 리턴 */}
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
