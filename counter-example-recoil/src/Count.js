import { atom } from "recoil"; // Recoil에서 atom 함수 끌어와서

export const countState = atom({ // countState라는 기본 state를 atom을 이용해 만들어 주고
  key: "countState", // key값은 countState
  default: 0, // 기본 값은 0으로 해준다.
});
