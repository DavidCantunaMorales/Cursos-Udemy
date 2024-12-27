import { useMemo, useState } from 'react';
import { useCounter } from '../hook/useCounter';

const heavyStuff = (interationNumber = 100) => {
  for (let i = 0; i < interationNumber; i++) {
    console.log('Ahi vemos ....');
  }

  return `${interationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{memorizeValue}</h4>

      <hr />
      <button onClick={() => increment()}>Aumentar</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
