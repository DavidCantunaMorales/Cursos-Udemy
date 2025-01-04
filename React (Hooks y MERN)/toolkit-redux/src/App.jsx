import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from './store/slices/counter/counterSlice';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a
          href='https://vite.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Incrementar en 5
        </button>
      </div>
    </>
  );
}

export default App;
