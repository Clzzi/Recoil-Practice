import { atom, selector } from "recoil"; // Recoil에서 atom 함수 끌어와서

export const countState = atom({ // countState라는 기본 state를 atom을 이용해 만들어 주고
  key: "countState", // key값은 countState
  default: 0, // 기본 값은 0으로 해준다.
});

export const inputState = atom({ // inputState라는 기본 state를 atom을 이용해 만들어 주고
  key: 'inputState', // key값은 inputState로 해준다.
  default: '', // 기본 값은 빈 문자열로
});

export const countInputState = selector({ // selector를 사용해서 새로운 atom을 생성
  key: 'countTitleState', // key값은 countTitleState로 해준다.
  get: ({ get }) => { // get함수로 데이터를 가져와서 return해준다.
    return `현재 카운트 ${get(countState)} 이고 입력값은 ${get(inputState)}`;
  },
  set: ({ set }, newValue ) => { // 여러개의 atom 정보를 동시에 수정할 수 있는 set 함수
    set(countState, Number(newValue)); // count atom 수정
    set(inputState, newValue + ''); // input atom 수정
  }
});

/*
  {() => setCountInput('9999')} -> 하게되면 selector로 만든 countInputState의 set함수에 9999가 입력되고, 
  set함수 내부에서 countState에 9999를 숫자로 바꾼걸 넣어주고
  set 함수 내부에서 inputStaet에 9999를 문자열로 바꿔서 넣어준다 
*/