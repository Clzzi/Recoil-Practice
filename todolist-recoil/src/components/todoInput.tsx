import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState, inputState, TodoType } from "recoil/Todo";
import "./todoInput.scss";

const TodoInput = () => {
  // todo를 add하는 atom
  const [todos, setTodos] = useRecoilState<TodoType[]>(todoState);
  // input값을 저장하는 atom
  const [input, setInput] = useRecoilState<string>(inputState);

  // 할일들 적는 input의 value를 저장해주는 fn
  const inputOnChange = (event: any) => {
    const { value } = event.target;
    setInput(value);
  };

  // 버튼 누르면 add됨
  const onClickTodo = (): void => {
    // 만약 할일이 아무것도 없는, 즉 공백이라면 아무 동작도 안하고 끝
    if (input.length === 0) {
      return;
    }

    // id는 할일들이 없으면 0 부터 아니면 todos배열의 할일 길이 - 1에 해당하는 id에 -1한것
    const id: number = todos.length ? todos[todos.length - 1].id + 1 : 0;
    // todo 생성
    const todo: TodoType = {
      id,
      done: false,
      contents: input,
    };

    // 할일 저장 하는데 스프레드 연산자를 이용해 기존의 할일들은 복사해두고 todo 즉, 할일을 넣어줌
    setTodos([...todos, todo]);
    // input창 초기화 및 포커스
    setInput("");
  };

  // 버튼대신 keyDown을 했을 때
  const onEnter = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      // 똑같이 길이 검사
      if (input.length === 0) {
        return;
      }

      // id도 똑같은 로직으로 생성
      const id: number = input.length ? todos[todos.length - 1].id + 1 : 0;
      // todo도 똑같이 ~ 
      const todo: TodoType = {
        id,
        done: false,
        contents: input,
      };

      // 할일저장
      setTodos([...todos, todo]);
      // input 공백으로 초기화
      setInput("");
    }
  };

  return (
    <div className={"todoListInput"}>
      <input
        className={"todoListInput-Input"}
        type="text"
        value={input}
        onChange={inputOnChange}
        onKeyPress={onEnter}
      />
      <button className={"todoListInput-btn"} onClick={onClickTodo}>
        O
      </button>
    </div>
  );
};

export default TodoInput;
