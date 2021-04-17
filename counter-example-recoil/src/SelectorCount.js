import { useRecoilState, useRecoilValue } from "recoil";
import { countState, inputState, countInputState } from "./Count";

function SelectorCount() { // SelectorCount라는 컴포넌트 생성
  const [count, setCount] = useRecoilState(countState); // useRecoilState에 countState를 넣어서 상태와 상태변경함수를 가져온다.
  const [input, SetInput] = useRecoilState(inputState); // useREcoilState에 inputState를 넣어서 상태와 상태변경함수를 가져온다.
  const countInput = useRecoilValue(countInputState); // useRecoilValue로 countInputState를 넣어서 get함수에서 return해주는 상태 값만 받아온다.

  return (
    <div>
      <h2>읽기 쓰기 카운터 컴포넌트</h2>
      <p>카운트 {count} 이고</p>
      {/* useRecoilState를 사용해서 count라는 상태의 값을 받아오고 */}
      <p>selector {countInput}</p>
      {/* useRecoilValue를 사용해서 Selector로 만든 countInputState를 넣어 countInput이라는 상태의 값만 받아온다. */}
      <input
        value={input}
        onChange={(e) => { 
          SetInput(e.target.value);
        }}
      />
      {/* input의 value는 input이라는 상태 값으로 하고 onChange 이벤트가 발생되면 setInput 상태변경 함수에 e.target.value를 넣어준다. */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {/* 숫자 증가 함수를 클릭하게되면 setCount함수에 count 상태 값에 1을 더한것을 넣어준다 */}
        숫자 증가
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {/* 숫자 증가 함수를 클릭하게되면 setCount함수에 count 상태 값에 1을 뺀것을 넣어준다 */}
        숫자 감소
      </button>
    </div>
  );
}

export default SelectorCount;
