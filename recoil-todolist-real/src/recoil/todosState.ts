import { atom, selector } from "recoil";
import { TodoType } from "types/todoType";

export const todosState = atom<TodoType[]>({
  key: "todosState",
  default: [
    {
      id: 1,
      done: false,
      contents: "1번",
    },
    {
      id: 2,
      done: false,
      contents: "2번",
    },
    {
      id: 3,
      done: true,
      contents: "3번",
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

    console.log(todos, filter);

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
