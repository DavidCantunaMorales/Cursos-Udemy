import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //  Sin parametros
  //  const increment = useCallback(() => {
  //    setCounter((value) => value + 1);
  //  }, []);

  // Con parametros
  const increment = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  /*
  const increment = () => {
    setCounter(counter + 1);
  };
  */

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
