import { atom, selector } from "recoil";
import { TodoType } from "types/todoType";

export const todosState = atom<TodoType[]>({
  key: "todosState",
  default: [
    {
      id: 1,
      done: true,
      contents: "레코일 공부하기!",
    },
    {
      id: 2,
      done: false,
      contents: "투두리스트 만들어보기!",
    },
    {
      id: 3,
      done: false,
      contents: "놀기!",
    },
  ],
});

export const todoInputState = atom<string>({
  key: "todoInputState",
  default: "",
});

export const filterTodosState = atom<string>({
  key: "filterTodosState",
  default: "All",
});

export const filterTodosSelector = selector({
  key: "filterTodosSelector",
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(filterTodosState);

    switch (filter) {
      case "Done":
        return todos.filter((todo) => {
          return todo.done !== false;
        });
      case "UnDone":
        return todos.filter((todo) => {
          return todo.done !== true;
        });
      default:
        // All
        return todos;
    }
  },
});
