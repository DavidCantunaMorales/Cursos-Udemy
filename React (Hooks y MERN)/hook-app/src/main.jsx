import { createRoot } from 'react-dom/client';
import './index.css';
import { MainApp } from './10-useContext/MainApp';
import { BrowserRouter } from 'react-router';

// import './09-useReducer/intro-reducer';

// import { TodoApp } from './09-useReducer/TodoApp';
// import { Padre } from './08-tarea-memo/Padre';
// import { CallbackHook } from './07-useCallback/CallbackHook';
// import { MemoHook } from './06-useMemo/MemoHook';
// import { Memorize } from './06-useMemo/Memorize';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { FormWithCustoomHook } from './02-useEffect/FormWithCustoomHook';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
