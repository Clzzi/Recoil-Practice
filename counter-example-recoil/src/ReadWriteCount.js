import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { countState } from "./Count";

function ReadWriteCount() {
  // 읽고쓸수 있는 컴포넌트 -> 실제 사용자가 action을 하고 action에 따른 상태변경을 실제 눈으로 확인할 수 있는 컴포넌트
  const [count, setCount] = useRecoilState(countState); // useRecoilState, 상태와 상태변경함수를 받아올 수 있는 함수이다.
  const setCountUseSetRecoilState = useSetRecoilState(countState); // useSetRecoilState, countState의 상태변경함수만 받아오는 함수이다.
  const resetCount = useResetRecoilState(countState); // useResetRecoilState, countState의 기본값으로 state의 값을 변경해주는 함수이다.

  return (
    <div>
      <h2>읽기 쓰기 카운터 컴포넌트</h2>
      <p>카운트 {count}</p>
      <button onClick={() => setCount(count + 1)}>숫자 증가</button> 
      {/* button을 누르게 되면 setCount라는 상태변경함수에 count라는 값 + 1만큼 적용시켜 count라는 상태의 값을 바꿈 */}
      
      <button onClick={() => setCount(count - 1)}>숫자 감소</button> 
      {/* button을 누르게 되면 setCount라는 상태변경함수에 count라는 값 - 1만큼 적용시켜 count라는 상태의 값을 바꿈 */}
      
      <button onClick={() => setCountUseSetRecoilState(count + 1)}> 
      {/* button을 누르게 되면 setCountUseSetRecoilState라는 함수 즉, 상태변경만 할수있게 받아온 함수에 (count 값에 + 1) 한걸 넣음 */}
        숫자 증가
      </button>
      
      <button onClick={() => setCountUseSetRecoilState(count - 1)}> 
      {/* button을 누르게 되면 setCountUseSetRecoilState라는 함수 즉, 상태변경만 할수있게 받아온 함수에 (count 값에 - 1) 한걸 넣음 */}
        숫자 감소
      </button>
      
      <button onClick={resetCount}>카운트 리셋</button> 
      {/* button을 누르게 되면 resetCount라는 함수 즉, 상태를 맨 처음 설정한 기본 값으로 설정 함 */}
    </div>
  );
}

export default ReadWriteCount;
