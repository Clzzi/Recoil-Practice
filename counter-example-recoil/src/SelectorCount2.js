import { useRecoilState } from 'recoil';
import { countState, inputState, countInputState } from './Count';

function SelectorCount2() {
  const [count, setCount ] = useRecoilState(countState);
  const [input, setInput] = useRecoilState(inputState);
  const [countInput, setCountInput] = useRecoilState(countInputState);

  return(
    <div>
      <h2> 카운트 {count} </h2>
      <p> selector {countInput} </p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCountInput('9999')}>selector 값 9999로 변경</button>
    </div>
  );
}

export default SelectorCount2;