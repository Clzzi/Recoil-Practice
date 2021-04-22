import { filterTodosState } from "recoil/todosState";
import { useSetRecoilState } from "recoil";
import "./todoFilter.scss";

const TodoFilter = (): JSX.Element => {
  const setFilter = useSetRecoilState(filterTodosState);
  
  const onChangeFilter = (e: any) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <select className={"todoSelector"} name="filter" onChange={onChangeFilter}>
      <option value="All">All</option>
      <option value="Done">Done</option>
      <option value="UnDone">UnDone</option>
    </select>
  );
};

export default TodoFilter;
