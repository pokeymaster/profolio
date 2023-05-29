import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import './index.css';
const container = document.getElementById('root');
const roots = createRoot(container); // createRoot(container!) if you use TypeScript
roots.render(<App tab="home" />);
