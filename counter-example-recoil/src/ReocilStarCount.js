import {useRecoilValue} from 'recoil';
import {recoilStarCounterState} from './recoil/recoilStar';

function RecoilStarCount () { 
  const recoilStarCount = useRecoilValue(recoilStarCounterState); // useRecoilValue로 recoilStarCounterState에 대한 상태 값 을 recoilStarCount에 넣어줌

  return (
    <>
      <p>recoil github star 갯수</p>
      <p>{recoilStarCount}</p>
      {/* star 갯수를 recoilStarCount에 넣었으니 출력 */}
    </>
  );
};

export default RecoilStarCount;