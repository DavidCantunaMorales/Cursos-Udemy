import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { store } from './store/store.js';
import { Provider } from 'react-redux';

import './index.css';
// import App from './App.jsx';
import { PokemonApp } from './PokemonApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </StrictMode>
);
