import React from 'react';

interface Types {
  id: number,
  done: boolean,
  contents: string,
  doneChange: (id: number) => void,
};

const TodoItem = ({contents, done, id, doneChange}: Types  ): JSX.Element => {
  
  return (
    <div className={'todoItem-wrapper'} >
      <div className={'todoItme-id'}>{id}</div>
      <div className={done ? 'todoItem-title-complete' : 'todoItem-title'}>{contents}</div>
      <input className={'todoItem-checkbox'} type="checkbox" checked={done} onChange={() => doneChange(id)} />
    </div>
  )
};

export default TodoItem;