import { TodoPropTypes } from "types/todoType";

const TodoItem = ({data, onDelete, onDone}: TodoPropTypes) => {
  const {id, done, contents} = data;

  return (
    <div className={"todoItem"}>
      <div className={"todoItem-title"}>{contents}</div>
      <div className={'todoItme-delete'}>삭제</div>
    </div>
  );
};

export default TodoItem;
