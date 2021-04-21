import { TodoPropTypes } from "types/todoType";
import './todoItem.scss';

const TodoItem = ({data, onDelete, onDone}: TodoPropTypes) => {
  const {id, done, contents} = data;

  return (
    <div className={"todoItem"}>
      <div className={"todoItem-title"} onClick={() => onDone(id)}>{contents}</div>
      <div className={'todoItem-delete'} onClick={() => onDelete(id)}>삭제</div>
    </div>
  );
};

export default TodoItem;
