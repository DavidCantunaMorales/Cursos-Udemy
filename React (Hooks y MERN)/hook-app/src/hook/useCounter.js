import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  // Incrementamos el valor segun un argumento
  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    // Validación para que el contador no baje de 0
    if (counter == 0) {
      return;
    }

    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};
