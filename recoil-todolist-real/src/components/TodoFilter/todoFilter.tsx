import { filterTodosState } from "recoil/todosState";
import { useSetRecoilState } from "recoil";

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