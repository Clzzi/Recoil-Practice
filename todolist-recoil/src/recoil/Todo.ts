import { atom } from "recoil";

export interface TodoType {
  id: number;
  done: boolean;
  contents: string;
}

export const todoState = atom<TodoType[]>({
  key: "todolistState",
  default: [
    {
      id: 1,
      done: false,
      contents: "아 Ts너무 어렵다 ㄹㅇ ",
    },
    {
      id: 2,
      done: false,
      contents: "아 Recoil쓰기도 뭔가 힘드네",
    },
    {
      id: 3,
      done: true,
      contents: "아 React는 그래도 할만한듯",
    },
  ],
});

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});
