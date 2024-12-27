import { useState } from 'react';
import { useCounter } from '../hook/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={() => increment()}>Aumentar</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
