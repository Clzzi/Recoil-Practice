import {atom, selector} from 'recoil';

// 지정한 ms 만큼 지연시키는 util
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const delayCountState = atom({ // count할 atom선언
  key: 'delayCountState',
  default: 0,
});

export const delay1SecSelector = selector({ // 비동기 처리 작업을 할 selector 선언
  key: 'delay1SecSelector',
  get: async ({ get }) => { // get함수엔 문자열에 atom의 상태값을 띄워주고 setTimeout하고 return
    const result = `delayCountState는 ${get(delayCountState)} 입니다.`;
    await delay(3000);
    return result;
  },
});

