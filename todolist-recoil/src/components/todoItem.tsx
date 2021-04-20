import "./todoItem.scss";

interface Types {
  id: number;
  done: boolean;
  contents: string;
  doneChange: (id: number) => void;
}

const TodoItem = ({ contents, done, id, doneChange }: Types): JSX.Element => {
  return (
    <div className={"todoItem"}>
      <div className={"todoItem-id"}>{id}</div>
      <div className={done ? "todoItem-title-complete" : "todoItem-title"} onClick={() => doneChange(id)}>
        {contents}
      </div>
      <input
        className={"todoItem-checkbox"}
        type="checkbox"
        checked={done}
        onChange={() => doneChange(id)}
      />
    </div>
  );
};

export default TodoItem;
