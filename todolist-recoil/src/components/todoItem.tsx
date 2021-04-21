import "./todoItem.scss";

interface Types { // props로 받을것들에 대한 타입지정
  id: number;
  done: boolean;
  contents: string;
  doneChange: (id: number) => void;
  deleteItem: (id: number) => void;
}

const TodoItem = ({ contents, done, id, doneChange, deleteItem }: Types): JSX.Element => { // JSX를 return해야함으로 type은 JSX.Element
  return (
    <div className={"todoItem"}>
      <div className={"todoItem-id"}>{id}</div>
      {/* 수행했으면 className을 바꿔줌 */}
      <div className={done ? "todoItem-title-complete" : "todoItem-title"} onClick={() => doneChange(id)}>
        {contents}
      </div>
      <input
        className={"todoItem-checkbox"}
        type="checkbox"
        checked={done}
        onChange={() => doneChange(id)}
      />
      <button className={'todoItem-delBtn'} onClick={() => deleteItem(id)} >❌</button>
    </div>
  );
};

export default TodoItem;
