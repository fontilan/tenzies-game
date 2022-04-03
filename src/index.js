import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// TODO (FEATURES TO ADD)
// 1. add real dots instead of numbers on the dice
// 2. track the number of rolls
// 3. track the time it took to win
// 4. save best time to localStorage
// 5. make it responsive
