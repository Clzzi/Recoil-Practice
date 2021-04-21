import React from "react";
import { filterTodosSelector, filterTodosState } from "recoil/todosState";
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const TodoFilter = () => {
  const setFilter = useSetRecoilState(filterTodosState);
  
  const onChangeFilter = (e: any) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <select name="filter" onChange={onChangeFilter}>
      <option value="All">All</option>
      <option value="Done">Done</option>
      <option value="UnDone">UnDone</option>
    </select>
  );
};

export default TodoFilter;