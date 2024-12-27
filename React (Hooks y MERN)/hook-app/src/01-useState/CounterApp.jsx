import { useState } from 'react';

export const CounterApp = () => {
  /*

  const [{ counter1, counter2, counter3 }, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
*/
  const [setNormalCounter] = useState(10);

  /* Otra manera de hacerlo */

  const [counter, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const addCounter = () => {
    //setCounter(counter1 + 1);
    /*
    setCount({
      counter1: counter1 + 1,
      counter2: counter2,
      counter3: counter3,
    });
    */
    setCount({
      ...counter,
      counter1: counter1 + 1,
    });
  };

  const resetCounter = () => {
    setNormalCounter(0);
  };

  const subtractCounter = () => {
    setNormalCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <button
        className='btn btn-primary'
        onClick={addCounter}
      >
        Aumentar
      </button>
      <button
        className='btn btn-warning'
        onClick={resetCounter}
      >
        Reset
      </button>
      <button
        className='btn btn-danger'
        onClick={subtractCounter}
      >
        Disminuir
      </button>
    </>
  );
};
