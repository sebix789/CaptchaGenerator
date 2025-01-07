import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './indexStyle';
import HomeScreen from './HomeScreen';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <HomeScreen />
  </React.StrictMode>
);

