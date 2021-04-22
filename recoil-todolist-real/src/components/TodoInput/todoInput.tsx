import { useRecoilState } from "recoil";
import { todosState, todoInputState } from "recoil/todosState";
import { TodoType } from "types/todoType";
import TodoFilter from "components/TodoFilter";
import { IoCheckmarkSharp } from "react-icons/io5";
import "./todoInput.scss";

const TodoInput = (): JSX.Element => {
  const [input, setInput] = useRecoilState<string>(todoInputState);
  const [todos, setTodo] = useRecoilState<TodoType[]>(todosState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const { value } = e.target;
    setInput(value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>):  void => {
    if (e.key === "Enter") {
      if (input.length !== 0) {
        const id = todos.length ? todos[todos.length - 1].id + 1 : 0;

        const todo = {
          id,
          done: false,
          contents: input,
        };

        setTodo([...todos, todo]);
        setInput("");
      }
    }
  };

  const addTodo = ():void => {
    if (input.length !== 0) {
      const id = todos.length ? todos[todos.length - 1].id + 1 : 0;

      const todo = {
        id,
        done: false,
        contents: input,
      };

      setTodo([...todos, todo]);
      setInput("");
    }
  };

  return (
    <>
      <div className={"todoInput"}>
        <TodoFilter />
        <input
          className={"todoInput-Input"}
          type="text"
          value={input}
          onChange={onChangeInput}
          onKeyPress={onEnter}
          placeholder={"Write a ToDo"}
        />
        <div className={"todoInput-btn"} onClick={addTodo}>
          <IoCheckmarkSharp className={"todoInput-icon"} />
        </div>
      </div>
    </>
  );
};

export default TodoInput;
