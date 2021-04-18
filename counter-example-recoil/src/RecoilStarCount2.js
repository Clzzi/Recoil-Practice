import {useRecoilValueLoadable} from 'recoil';
import { recoilStarCounterState} from './recoil/recoilStar';

function RecoilStarCount2() {
  const recoilStarCount = useRecoilValueLoadable(recoilStarCounterState);

  if(recoilStarCount.state === 'loading') {
    return <div>loading</div>
  }

  return (
    <>
      <p>recoil github star 갯수 </p>
      <p>{recoilStarCount.contents} 개</p>
    </>
  );
};

export default RecoilStarCount2;