import { useRecoilValue } from "recoil";
import { countState } from "./Count";

function ReadOnlyCount() { // 사용자가 볼 수만 있는 컴포넌트
  const count = useRecoilValue(countState); // count라는 변수에 useRecoilValue라는 상태 값만 받아오는 함수를 이용해 상태만 받아오는 것

  return (
    <div>
      <h2>일기 전용 컴포넌트</h2>
      <p2> 카운트 {count} </p2>
      {/* 사용자는 count라는 값이 변경되었을때 count라는 상태만 볼 수 있다. */}
    </div>
  );
}

export default ReadOnlyCount;
