import { atom } from "recoil";

export interface TodoType { // 기본 투두리스트 타입
  id: number;
  done: boolean;
  contents: string;
}

export const todoState = atom<TodoType[]>({ // Recoil-Atom을 이용해서 할일들 목록을 배열에 저장
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

export const inputState = atom<string>({ // Recoil-Atom을 이용해 할일 적는 input atom
  key: "inputState",
  default: "",
});
