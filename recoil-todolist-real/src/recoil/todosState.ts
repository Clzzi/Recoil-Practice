import { atom, selector,useRecoilState, useRecoilValue } from 'recoil';
import { TodoType } from 'types/todoType';

export const todosState = atom<TodoType[]>({
  key: 'todosState',
  default: [],
});

export const todoInputState = atom<string>({
  key: 'todoInputState',
  default: '',
});

export const filterTodosState = atom<string>({
  key: 'filterTodosState',
  default: 'All',
});

export const filterTodosSelector = selector({
  key: 'filterTodosSelector',
  get:({get}) => {
    const todos = get(todosState);
    const filter = get(filterTodosState);
    
    console.log(todos, filter);

    switch(filter) {
      case 'Done':
        return todos.filter((todo) => {
          todo.done !== true;
        });
      case 'UnDone':
        return todos.filter((todo) => {
          todo.done !== false;
        });
      default: // All
        return todos;
    }
  }
});




