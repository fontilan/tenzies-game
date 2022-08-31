import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// TODO (FEATURES TO ADD)
// ✔ add real dots instead of numbers on the dice
// ✔ make it responsive
// ✖ track the number of rolls
// ✖ track the time it took to win
// ✖ save best time to localStorage
