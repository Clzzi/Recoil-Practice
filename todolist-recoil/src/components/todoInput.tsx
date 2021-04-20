import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState, inputState, TodoType } from "recoil/Todo";

const TodoInput = () => {
  // todo를 add하는 atom
  const [todos, setTodos] = useRecoilState<TodoType[]>(todoState);
  // input값을 저장하는 atom
  const [input, setInput] = useRecoilState<string>(inputState);

  const inputOnChange = (event: any) => {
    const { value } = event.target;
    setInput(value);
  };

  const onClickTodo = (): void => {
    if (input.length === 0) {
      return;
    }

    const id: number = todos.length ? todos[todos.length - 1].id + 1 : 0;
    const todo: TodoType = {
      id,
      done: false,
      contents: input,
    };

    setTodos([...todos, todo]);
    setInput("");
  };

  const onEnter = (event: React.KeyboardEvent): void => {
    if (input.length === 0) {
      return;
    }

    if (event.key === "Enter") {
      const id: number = input.length ? todos[todos.length - 1].id + 1 : 0;
      const todo: TodoType = {
        id,
        done: false,
        contents: input,
      };

      setTodos([...todos, todo]);
      setInput("");
    }
  };

  return (
    <div className={"todoList-InputWrapper"}>
      <input
        className={"todoList-Input"}
        type="text"
        value={input}
        onChange={inputOnChange}
        onKeyPress={onEnter}
      />
      <button className={"todoList-btn"} onClick={onClickTodo}>
        O
      </button>
    </div>
  );
};

export default TodoInput;
