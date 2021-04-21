import { TodoPropTypes } from "types/todoType";
import './todoItem.scss';
import { TiDelete } from 'react-icons/ti';

const TodoItem = ({data, onDelete, onDone}: TodoPropTypes) => {
  const {id, done, contents} = data;

  return (
    <div className={"todoItem"}>
      <div className={done ? "todoItem-title-done" : "todoItem-title"} onClick={() => onDone(id)}>{contents}</div>
      <div className={'todoItem-delete'} onClick={() => onDelete(id)}>
        <TiDelete className={'todoItem-delIcon'} />
      </div>
    </div>
  );
};

export default TodoItem;
