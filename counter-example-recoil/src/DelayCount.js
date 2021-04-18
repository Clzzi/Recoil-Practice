import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {delayCountState, delay1SecSelector} from './recoil/delayCount';

function DelayCount() {
  const delay1Sec = useRecoilValueLoadable(delay1SecSelector); 
  // delay1Sec라는 변수에 useRecoilValueLoadable로 delay1SecSelector의 상태 값만 받아오고
  const [delayCount, setDelayCount ] = useRecoilState(delayCountState);
  // useRecoilState로 delayCountState의 상태와 setter함수를 받아온다.

  if(delay1Sec.state === 'loading') { 
    // loadable으로 받아온 변수의 상태가 loading이면 로딩중이라고 띄워주기
    return (<div>로딩중 입니둥 ~ </div>);
  }

  return (
    <>
      <h3>캐싱된 selector 값 </h3>
      <p>{delay1Sec.contents}</p>
      <button onClick = {() => setDelayCount(delayCount + 1)}>증가</button>
      <button onClick = {() => setDelayCount(delayCount - 1)}>감소</button>
    </>
  );
};

export default DelayCount;