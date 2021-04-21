export interface TodoType {
  id: number;
  done: boolean;
  contents: string;
}

export interface TodoPropTypes {
  data: TodoType;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}
