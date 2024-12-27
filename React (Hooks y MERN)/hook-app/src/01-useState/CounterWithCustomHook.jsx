import { useCounter } from '../hook/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button onClick={decrement}>Disminuir</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => increment(2)}>Aumentar</button>
    </>
  );
};
